const {characters} = require('../data/db')

/** Resolver */
module.exports = {
  Query: {
    getCharacters: (_, {input}, ctx) => {
      console.log({input, ctx})
      return characters.filter(character => character.power === input.power)
    },
    getCharacter: () => { 
      const item = Math.floor(Math.random() * characters.length)
      return characters[item]
    },
    getPowers: () => characters
  }
}