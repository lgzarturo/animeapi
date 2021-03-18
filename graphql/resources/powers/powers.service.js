const Power = require('./powers.model')

function getOneByPower(power) {
  return Power.findOne({power})
}

function create(input) {
  return new Power(input).save()
}

module.exports = {
  getOneByPower,
  create
}