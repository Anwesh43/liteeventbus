import {PORT} from './constants'
import Server from './server'
import WebSocket from 'ws'

interface PublishMessage {
    publish: boolean, 
    subject: string, 
    data: any 
}

interface SubscribeMessage {
    subject : string, 
    subscribe: boolean
}

function isPublishMessage(message : (PublishMessage | SubscribeMessage)) : message is PublishMessage {
    return (message as PublishMessage).publish !== undefined
}


function isSubscribeMessage(message : (PublishMessage | SubscribeMessage)) : message is SubscribeMessage {
    return (message as SubscribeMessage).subscribe !== undefined
}

export default class Broker {

    server : Server
    subjectSocketMap : Map<String, WebSocket> = new Map()

    constructor() {
        this.server = new Server(PORT)
    }

    start() {
        this.server.handleSockets()
        this.server.filterMessage((socket : WebSocket, message : (PublishMessage | SubscribeMessage)) => {
            if (isPublishMessage(message) && this.subjectSocketMap.has(message.subject)) {
                this.subjectSocketMap.get(message.subject)?.send(message.data)
            }
            if (isSubscribeMessage(message)) {
                this.subjectSocketMap.set(message.subject, socket)
            }
        })
    }
}