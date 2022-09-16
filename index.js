const express = require('express')
const parseBody = require('body-parser')
const cors = require('cors')
const operations = require('./dboperations')
const app = express()

const options = {
    origin: '*'
}

app.use(cors(options))
app.use(parseBody.json())
app.use(parseBody.urlencoded({extended: true}))

app.get('/', (req, res)=> res.json({status: 'get request successful'}))
app.get('/data', operations.getData)
app.put('/data/:id', operations.updateData)

const port = process.env.PORT || 3001
app.listen(port, ()=> {console.log('Server is up and running on port ', port)})