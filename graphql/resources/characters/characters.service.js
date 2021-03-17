const Character = require('./character.model')

function listAll() {
  return Character.find({})
}

function getOneByAlias(alias) {
  return Character.findOne({alias})
}

function getOneByAliasOrFullname(alias, fullname) {
  return Character.findOne()
    .or([
      {'fullname': fullname},
      {'alias': alias}
    ])
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