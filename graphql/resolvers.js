const Character = require('../models/Character')
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
  },
  Mutation: {
    newCharacter: async (_, {input}) => {
      // Validar los datos del input
      const {fullname, alias} = input
      const existCharacter = await Character.findOne({fullname})
      console.log(existCharacter)
      if (existCharacter) {
        throw new Error('El personaje ya existe en la base de datos')
      }

      try {
        const character = new Character(input)
        character.save()
        return character
      } catch(error) {
        console.log(error)
        throw new Error('No se pudo guardar la informacion')
      }    
    }
  }
}