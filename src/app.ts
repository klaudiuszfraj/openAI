import express from "express"
const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('8888888')
})

app.listen(port, () => {
    console.log('express listening at port', port);
})
