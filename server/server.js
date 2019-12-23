const express = require('express')
const path = require('path')
const port = 1337

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (reg, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port, () => console.log(`App listening on port ${port}`))
