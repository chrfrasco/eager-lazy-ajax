const app = require('express')()
const cors = require('cors')

app.use(cors())

app.get('/time', (req, res) => {
  res.json({ time: `${new Date().toLocaleTimeString()}` })
})

app.listen(9000, () => console.log(`server running on port 9000`))
