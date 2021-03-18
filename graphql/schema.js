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
    firstApparition: String
    about: String
    power: Power
    occupations: [Occupation]   
    appearsIn: [Episode]     
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
    createdAt: String
  }
  type Power {
    id: ID
    power: String
    type: String
    description: String
    createdAt: String
  }

  input CharacterInput {
    fullname: String!
    alias: String!
    race: String
    age: Int
    birthday: String
    status: String
    height: Int
    photo: String
    firstApparition: String
    about: String
    power: PowerInput
    occupations: [String]
    appearsIn: [EpisodeInput]
  }

  input PowerInput {
    power: String
    type: String
    description: String  
  }

  input EpisodeInput {
    name: String
    number: Int
    season: Int
    synopsis: String
    releaseDate: String
    photos: [String] 
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