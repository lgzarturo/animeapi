const { ApolloServer } = require('apollo-server')

const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

/** Configurando el servidor de Apollo */
const server = new ApolloServer({
  typeDefs,
  resolvers
})

/** Iniciando el servicio */
server.listen().then(({url}) => {
  console.log(`🚀 Servidor iniciado en la URL ${url}`)
})
