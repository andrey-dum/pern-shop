const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function (req, res, nex) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer token3232dsd
            if (!token) {
                return res.status(401).json({messgae: "Не авторизован!"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role) {
                return res.status(403).json({messgae: 'У вас нет доступа'})
            }

            res.user = decoded
            next()
        } catch (e) {
            res.status(401).json({messgae: "Не авторизован!"})
        }
    }
}