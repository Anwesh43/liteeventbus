import Broker from './Broker'
import Publisher from './Publisher'
import Subscriber from './Subscriber'

const EventBus = {

    startBroker() {
        const broker : Broker = new Broker()
        broker.start()
    },

    createPublisher() : Publisher {
        const pub : Publisher = new Publisher()
        return pub 
    },
    
    createSubscriber() : Subscriber {
        const sub : Subscriber = new Subscriber()
        return sub 
    }
}

export default EventBus