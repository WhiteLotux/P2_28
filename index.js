const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Omar Pimentel<br>C.I 28.050.922<br>Seccion 1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
