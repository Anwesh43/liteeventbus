import Client from './client'
import {PORT} from './constants'

export default class Subscriber {
    
    client : Client = new Client(`ws://localhost:${PORT}`)
    messages : Array<string> = []

    subscribe(subject : string, cb : Function) {
        const subscribe = true
        this.client.publish(JSON.stringify({subscribe, subject}))
        this.client.listen((data : string) => {
            if (cb) {
                cb(data)
            }
            this.messages.push(data)
        })
    }

    poll() : Array<string> {
        const currMessages = this.messages
        this.messages.length = 0 
        return currMessages 
    }

    
}