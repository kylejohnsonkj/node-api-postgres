const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname))  // serve static CSS file
app.use(methodOverride('_method')); // support PUT/DELETE in forms
app.set('view engine', 'ejs') // allow for dynamic pages

app.get('/', db.getUsers)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)  // raw json
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
