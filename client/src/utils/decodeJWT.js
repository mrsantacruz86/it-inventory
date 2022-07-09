import jwt from 'jsonwebtoken';

export default function decodeJWT(token) {
	return jwt.decode(token);
}