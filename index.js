const express = require('express')

const app = express()
app.use(express.json())

app.use(require('./routes/sumar.js'))

const port = 3000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})