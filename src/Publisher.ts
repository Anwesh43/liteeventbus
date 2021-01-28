import Client from './client'
import {PORT} from './constants'
export default class Publisher {

    client : Client = new Client(`ws://localhost:${PORT}`)

    publish(subject : string, message : Object) {
        const publish = true
        console.log("published here", subject, message)
        this.client.publish(JSON.stringify({publish, subject, message}))
    }

    close() {
        this.client.close()
    }
}