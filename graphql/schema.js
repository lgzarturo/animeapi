const { gql } = require('apollo-server')

/** Schema */
module.exports = gql`
  type Character {
    id: ID
    fullname: String
    alias: String
    race: Race
    age: Int
    birthday: String
    status: String
    height: Int
    photo: String
    power: Power
    firstApparition: String
    about: String
    occupations: [Occupation]   
    affiliations: [Affiliation]
    episodes: [Episode]     
    createdAt: String
  }
  type Race {
    race: String
  }
  type Occupation {
    occupation: String
  }
  type Episode {
    id: ID
    name: String
    number: Int
    season: Int
    synopsis: String
    releaseDate: String
    photos: [String]
  }
  type Affiliation {
    id: ID
    name: String
    leader: [Character]
    location: Location
    status: String
    description: String
  }
  type Location {
    id: ID
    name: String
    description: String
  }
  type Power {
    id: ID
    power: String
    type: String
    description: String
  }
  input CharacterInput {
    fullname: String
    alias: String
    race: String
  }
  type Query {
    getCharacters: [Character]
    getCharacter(alias: String!): Character
    getPowers: [Power]
  }
  type Mutation {
    newCharacter(input: CharacterInput!): Character
  }
`