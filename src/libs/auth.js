const jwt = require('jsonwebtoken');

const verifyJWToken = token => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if (err || !decodedToken) {
				return reject(err)
			}
			resolve(decodedToken)
		})
	})
}

module.exports = verifyJWToken;