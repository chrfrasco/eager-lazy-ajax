import Rx from 'rx-dom'

const url = 'http://localhost:9000/time'

const $post = Rx.DOM.getJSON(url)
const postPromise = fetch(url)

setTimeout(() => {
  $post.subscribe(makePrintTime('observable'))
  postPromise.then(r => r.json()).then(makePrintTime('fetch'))
}, 3000)

function makePrintTime(name) {
  return (time) => {
    console.log(`${name}: requested at ${time.time}, printed at ${new Date().toLocaleTimeString()}`)
  }
}
