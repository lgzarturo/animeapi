const { gql } = require('apollo-server')

/** Schema */
module.exports = gql`
  type Character {
    name: String
  }
  type Power {
    power: String
  }
  input CharacterInput {
    power: String 
  }
  type Query {
    getCharacters(input: CharacterInput!): [Character]
    getCharacter: Character
    getPowers: [Power]
  }
`