const Character = require('./characters.model')

function listAll() {
  return Character.find({})
    .populate('appearsIn').populate('power')
}

function getOneByAlias(alias) {
  return Character.findOne({alias})
    .populate('appearsIn').populate('power')
}

function getOneByAliasOrFullname(alias, fullname) {
  return Character.findOne()
    .or([
      {'fullname': fullname},
      {'alias': alias}
    ])
    .populate('appearsIn').populate('power')
}

function create(input) {
  return new Character(input).save()
}

module.exports = {
  listAll,
  getOneByAlias,
  getOneByAliasOrFullname,
  create
}