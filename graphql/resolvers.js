const characterService = require('./resources/characters/characters.service')
const powerService = require('./resources/powers/powers.service')
const episodeService = require('./resources/episodes/episodes.service')

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
      console.log(character)
      if (!character) {
        throw new Error(`No existe el personalje con el alias ${alias}`)
      }
      return character
    },
    getPowers: () => characters
  },
  Mutation: {
    newCharacter: async (_, {input}) => {    
      const {fullname, alias, power, appearsIn} = input
      /** Validar si el usuario existe en la base de datos */
      const existCharacter = await characterService.getOneByAliasOrFullname(alias, fullname)      
      if (existCharacter) {
        throw new Error('El personaje ya existe en la base de datos')
      }

      /** Guardar la relacion con un documento  */
      let powerData      
      if (power) {
        powerData = await powerService.getOneByPower(power.power)        
        if (!powerData) {
          powerData = await powerService.create(power)
        }
      }

      /** Guradar episodios en el personaje */
      let appearsInData = []
      if (appearsIn) {      
        appearsInData.push(...await episodeService.findOrCreateObjects(appearsIn))       
      }

      try {        
        if (powerData && powerData._id) {
          input = {...input, power: powerData._id}
        }      
        console.log("appearsInData: ", appearsInData)
        if (appearsInData) {
          const ids = appearsInData.map(episode => episode._id)
          console.log("ids: ", ids)
          input = {...input, appearsIn: ids}
        }           
        const character = characterService.create(input)
        return character
      } catch(error) {
        console.log(error)
        throw new Error('No se pudo guardar la informacion')
      }    
    }
  }
}