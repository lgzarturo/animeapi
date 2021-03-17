const characterService = require('./resources/characters/characters.service')
const Character = require('./resources/characters/character.model')
const {characters} = require('../data/db')


/** Resolver */
module.exports = {
  Query: {
    getCharacters: async () => {
      const characters = await characterService.listAll()    
      if (!characters) {
        throw new Error('No hay personajes')
      }
      return characters
    },
    getCharacter: async (_, {alias}) => { 
      const character = await characterService.getOneByAlias(alias)
      if (!character) {
        throw new Error(`No existe el personalje con el alias ${alias}`)
      }
      return character
    },
    getPowers: () => characters
  },
  Mutation: {
    newCharacter: async (_, {input}) => {    
      const {fullname, alias} = input
      /** Validar si el usuario existe en la base de datos */
      const existCharacter = await characterService.getOneByAliasOrFullname(alias, fullname)
      console.log(existCharacter)
      if (existCharacter) {
        throw new Error('El personaje ya existe en la base de datos')
      }

      try {
        const character = characterService.create(input)
        return character
      } catch(error) {
        console.log(error)
        throw new Error('No se pudo guardar la informacion')
      }    
    }
  }
}