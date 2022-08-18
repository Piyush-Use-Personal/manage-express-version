const { Router } = require('express')

const router = Router()

router.get('/v1', (req, res) => res.json({ message: 'success from v1' }))
router.get('/v2', (req, res) => res.json({ message: 'success from v2' }))

module.exports = router