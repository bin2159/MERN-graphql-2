const {ApolloServer} =require('apollo-server')
const {typeDefs}=require('./schema/typedefs')
const {resolvers}=require('./schema/resolver')
const server=new ApolloServer({typeDefs,resolvers})

server.listen().then(({url})=>{
    console.log(`server listening on port no:${url}`)
})