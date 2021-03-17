const { gql } = require('apollo-server')

/** Schema */
module.exports = gql`
  type Character {
    id: ID
    fullname: String
    alias: String
    race: String
    createdAt: String
  }
  type Power {
    power: String
  }
  input CharacterInput {
    fullname: String
    alias: String
    race: String
  }
  type Query {
    getCharacters: [Character]
    getCharacter: Character
    getPowers: [Power]
  }
  type Mutation {
    newCharacter(input: CharacterInput!): Character
  }
`