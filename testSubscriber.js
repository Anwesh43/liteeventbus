const {eventBus:{createSubscriber}} = require('./dist/main')

const subscriber = createSubscriber()
subscriber.subscribe('TEST', (data) => {
    console.log('RECV_MESSAGE', data)
})