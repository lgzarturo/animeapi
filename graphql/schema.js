const { gql } = require('apollo-server')

/** Schema */
module.exports = gql`
  type Character {
    name: String
  }
  type Power {
    power: String
  }
  type Query {
    getCharacters: [Character]
    getCharacter: Character
    getPowers: [Power]
  }
`