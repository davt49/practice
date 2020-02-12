const router = require('express').Router()
const infos = require('../controllers/infomodels')

router.route('/infos')
  .get(infos.index)

module.exports = router