import WebSocket from 'ws';

export default class Server {
    server  : WebSocket.Server 
    sockets : Array<WebSocket> = []

    constructor(private port : number) {
        this.server = new WebSocket.Server({
            port
        })
    
    }

    handleSockets() {
        this.server.on('connection', (socket : WebSocket) => {
            this.sockets.push(socket)
        })
    }

    filterMessage(cb : Function) {
        this.sockets.forEach((socket) => {
            socket.on('message', (data : string) => {
                const obj = JSON.parse(data)
                cb(socket, obj)
            })
        })
    }
}

