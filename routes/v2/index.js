const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.json({ message: 'success from v2' }))

module.exports = router