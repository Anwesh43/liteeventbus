import WebSocket from 'ws'

export default class Client {

    socket : WebSocket 
    isOpen : boolean = false
    messages : Array<string> = []

    constructor(host : string) {
        this.socket = new WebSocket(host)
        this.socket.on('open', () => {
            this.isOpen = true 
            if (this.messages.length > 0) {
                this.messages.forEach((message) => {
                    this.socket.send(Buffer.from(message))
                })
                this.messages.length = 0 
            }
        })
    }

    publish(data : string) {
        if (this.isOpen) {
            if (this.messages.length > 0) {
                this.messages.forEach((message) => {
                    this.socket.send(Buffer.from(message))
                })
                this.messages.length = 0 
            }
            this.socket.send(Buffer.from(data))
        } else {
            this.messages.push(data)
        }
    }

    listen(cb : Function) {
        this.socket.on('message', (data : Buffer) => {
           // console.log("ORIG_MESSAGE", data.toString())
            cb(data.toString())
        })
    }

    close() {
        this.socket.close()
    }
}