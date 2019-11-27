module.exports = {
    getMembers(req, res) {
        const db = req.app.get('db')
        db.get_member()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getEvents(req, res) {
        const db = req.app.get('db')
        db.get_events()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getOfficers(req, res) {
        const db = req.app.get('db')
        db.get_officers()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteMember(req, res){
        const db = req.app.get('db')
        db.delete_member(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    },
    deleteEvent(req, res){
        const db = req.app.get('db')
        db.delete_event(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    },
    updateMember(req, res){
        console.log(req.body, req.params)
        const db = req.app.get('db')
        const {member_rank, first_name, last_name, email, paid, amount, isAdmin} = req.body
        const {id} = req.params
        db.update_member([member_rank, first_name, last_name, email, paid, amount, isAdmin, +id])
        .then(result => {
            res.status(200).send(result)
        })
        
    },
    register(req, res) {
        const db = req.app.get('db')
        const {member_rank, first_name, last_name, email} = req.body
        console.log(req.body)
        db.add_member({
            member_rank: member_rank,
            first_name: first_name,
            last_name: last_name,
            email: email,
            
        })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    addEvent(req, res) {
        const db = req.app.get('db')
        const {date, event, description} = req.body
        console.log(req.body)
        db.add_event({
            date: date,
            event: event,
            description: description,
        })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
}