import WebSocket from 'ws'

export default class Client {

    socket : WebSocket 

    constructor(host : string) {
        this.socket = new WebSocket(host)
    }

    publish(data : string) {
        this.socket.send(data)
    }

    listen(cb : Function) {
        this.socket.on('message', (data : string) => {
            cb(data)
        })
    }
}