require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const authCtrl = require('./authController')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env 
const massive = require('massive')

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.get('/api/People', ctrl.getMember)
app.get('/api/Event', ctrl.getEvents)
app.get('/api/Officers', ctrl.getOfficers)
app.delete('/api/People/:id', ctrl.deleteMember)
app.delete('/api/Event/:id', ctrl.deleteEvent)
app.put('/api/People/:id', ctrl.updateMember)
app.put(`/api/Event/:id`, ctrl.updateEvent)
// app.post('/api/People', ctrl.addMember)
app.post('/auth/register', authCtrl.addMember)
app.post('/auth/login', authCtrl.login)
app.post('/api/Event', ctrl.addEvent)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} dollars in ma pocket`))
})
