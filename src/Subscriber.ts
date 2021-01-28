import Client from './client'
import {PORT} from './constants'

export default class Subscriber {
    
    client : Client = new Client(`ws://localhost:${PORT}`)

    subscribe(subject : string) {
        const subscribe = true
        this.client.publish(JSON.stringify({subscribe, subject}))
    }
}