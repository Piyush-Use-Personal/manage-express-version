const { Router } = require('express')
const registerControllers = require('./merge')
const router = Router()

const v1Controller = (req, res, next) => {
    res.json({ message: 'success from v1' })
}
const v2Controller = (req, res, next) => {
    res.json({ message: 'success from v2' })
}

router.get('/', registerControllers({
    '1.0.0': v1Controller,
    '2.0.0': v2Controller,
}))



module.exports = router