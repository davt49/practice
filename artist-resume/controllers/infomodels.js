const info = require('../models/infomodel')

function indexRoute(req, res, next){
  info
    .find()
    .exec()
    .then(infos => res.json(infos))
    .catch(next)
}

module.exports = {
  index: indexRoute
}