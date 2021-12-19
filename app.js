const express = require('express')
const app = express()
const port = process.env.port || 3004

app.get('/', (req, res) => {
    res.send('Github CD ')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

console.log("server running")