const Episode = require('./episodes.model')

function getOneBySeasonAndNumber(season, number) {
  return Episode.findOne()
    .and([
      {"season": season},
      {"number": number}
    ])
}

function create(input) {
  return new Episode(input).save()
}

async function findOrCreateObjects(inputArray) {
  if (!Array.isArray(inputArray)) return []
  const result = []
  for (index in inputArray) {
    const input = inputArray[index]
    const episode = await getOneBySeasonAndNumber(input.season, input.number)
    if (!episode) {
      result.push(await create(input))
    } else {
      result.push(episode)
    }
  } 
  return result
}

module.exports = {
  getOneBySeasonAndNumber,
  create,
  findOrCreateObjects
}