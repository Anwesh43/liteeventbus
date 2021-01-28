const {eventBus:{createPublisher}} = require('./dist/main')
const pub = createPublisher()
let k = 0 
const interval = setInterval(() => {
    pub.publish('TEST',`HELLO WORLD${k}`)
    k++
    if (k == 10) {
        clearInterval(interval)
        pub.close()
    }
}, 2000)
