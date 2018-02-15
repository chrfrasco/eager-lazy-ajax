import Rx from 'rx-dom'

const url = 'http://localhost:9000/time'

const $time = Rx.DOM.getJSON(url)
const timePromise = fetch(url)

setTimeout(() => {
  $time.subscribe(makePrintTime('observable'))
  timePromise.then(r => r.json()).then(makePrintTime('fetch'))
}, 3000)

function makePrintTime(name) {
  return (time) => {
    console.log(`${name}: requested at ${time.time}, printed at ${new Date().toLocaleTimeString()}`)
  }
}
