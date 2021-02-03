const jwt = require('jsonwebtoken')

module.exports = function (req, res, nex) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer token3232dsd
        if (!token) {
            return res.status(401).json({messgae: "Не авторизован!"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        res.user = decoded
        next()
    } catch (e) {
        res.status(401).json({messgae: "Не авторизован!"})
    }
}