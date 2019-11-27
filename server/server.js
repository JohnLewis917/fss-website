require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env 
const massive = require('massive')

const app = express()
app.use(express.json())

app.get('/api/People', ctrl.getMembers)
app.get('/api/Events', ctrl.getEvents)
app.get('/api/Officers', ctrl.getOfficers)
app.delete('/api/People/:id', ctrl.deleteMember)
app.delete('/api/Events/:id', ctrl.deleteEvent)
app.put('/api/People/:id', ctrl.updateMember)
app.post('/api/People', ctrl.register)
app.post('/api/Event', ctrl.addEvent)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} dollars in ma pocket`))
})
