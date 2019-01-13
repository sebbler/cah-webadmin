/* eslint-disable */
/* const { User } = require('../models') */

module.exports = {
	async login (req, res) {
		try{
			/* const {email, password} = req.body
			const user = await User.findOne({
				where: {
					email: email
				}
			}) */
			if (!user) {
				return res.status(403).send({
					error:'Invalid login information'
				})
			}

			const isPasswordValid = password === user.password
			if (!isPasswordValid) {
				return res.status(403).send({
					error:'Invalid login information'
				})
			}

			const userJson = user.toJSON()
			res.send({
				user: userJson
			})
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to log in'
			})
		}
	}
}