const {characters} = require('../data/db')

/** Resolver */
module.exports = {
  Query: {
    getCharacters: () => characters,
    getCharacter: () => { 
      const item = Math.floor(Math.random() * characters.length)
      return characters[item]
    },
    getPowers: () => characters
  }
}