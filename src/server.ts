import WebSocket from 'ws';

export default class Server {
    server  : WebSocket.Server 
    sockets : Array<WebSocket> = []
    cb : Function = ()=>{} 

    constructor(private port : number) {
        this.server = new WebSocket.Server({
            port
        })
    
    }

    handleSockets() {
        this.server.on('connection', (socket : WebSocket) => {
            this.sockets.push(socket)
            console.log("new_connection", new Date().toString())
            socket.on('message', (data : Buffer) => {
                const obj = JSON.parse(data.toString())
                this.cb(socket, obj)
            })
        })
    }

    filterMessage(cb : Function) {
        this.cb = cb
    }
}

