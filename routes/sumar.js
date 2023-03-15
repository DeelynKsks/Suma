const router = require('express').Router();

const { sum } = require('../controllers/sumar')

router.get("/sumar", sum)

module.exports = router