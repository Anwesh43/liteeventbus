import Broker from './Broker'
import Publisher from './Publisher'
import Subscriber from './Subscriber'

export default class EventBus {

    static startBroker() {
        const broker : Broker = new Broker()
        broker.start()
    }

    static createPublisher() : Publisher {
        const pub : Publisher = new Publisher()
        return pub 
    }

    static createSubscriber() : Subscriber {
        const sub : Subscriber = new Subscriber()
        return sub 
    }
}

