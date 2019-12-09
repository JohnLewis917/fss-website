const bcrypt = require('bcryptjs')

module.exports = {
    addMember: async (req, res) => {
      const db = req.app.get('db')
      const {member_rank, first_name, last_name, email, password} = req.body
      const found = await db.find_member([email])
      if (+found[0].count !== 0) {
        return res.status(409).send({message: 'Email already registered'})
      }
      const member_id = await db.add_member({member_rank, first_name, last_name, email})
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
      db.add_hash({member_id: member_id[0].id, hash})
      req.session.member = {member_id: member_id[0].member_id, member_rank, first_name, last_name, email}
      res.status(201).send({message: 'Logged In', member: req.session.member})
    },
    login: async (req, res) => {
      const db = req.app.get('db')
      const {email, password} = req.body
      const found = await db.find_member([email])
      if (+found[0].count === 0) {
        return res.status(401).send({message: 'An account with that email does not exist'})
      }
      const foundMember = await db.find_hash([email])
      const {hash, member_rank, first_name, last_name} = foundMember[0]
      const result = bcrypt.compareSync(password, hash)
      if (!result) {
        return res.status(401).send({message: 'Password incorrect'})
      }
      req.session.user = {member_id, member_rank, first_name, last_name, email}
      alert("logged in")
      res.status(200).send({message: 'Logged In', member: req.session.member})
      
    },
    logout: (req, res) => {
      req.session.destroy()
      res.status(200).send({message: 'Logged out'})
    }
  }