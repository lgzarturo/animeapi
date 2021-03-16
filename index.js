const { ApolloServer, gql } = require('apollo-server')

/** Dummy data */
const characters = [
  {
    name: 'Monkey D. Luffy',
    power: 'Poder de la fruta goma goma'
  },
  {
    name: 'Son Goku',
    power: 'Ki'
  },
  {
    name: 'Uzumaki Naruto',
    power: 'Elemento aire'
  }
]

/** Schema */
const typeDefs = gql`
  type Character {
    name: String
    power: String
  }
  type Query {
    getCharacters: [Character]
    getCharacter: Character
  }
`

/** Resolver */
const resolvers = {
  Query: {
    getCharacters: () => characters,
    getCharacter: () => { 
      const item = Math.floor(Math.random() * characters.length)
      return characters[item]
    }
  }
}

/** Configurando el servidor de Apollo */
const server = new ApolloServer({
  typeDefs,
  resolvers
})

/** Iniciando el servicio */
server.listen().then(({url}) => {
  console.log(`Servidor iniciado en la URL ${url}`)
})