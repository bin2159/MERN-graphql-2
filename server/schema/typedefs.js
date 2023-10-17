const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age:Int!
    nationality: Nationality!
    friends:[User!]
    favoriteMovie:[Movie]
  }
  type Movie {
    id:ID!
    name:String!
    yearofPublication:Int!
    isInTheaters:Boolean!
  }
  type Query {
    users: [User!]!
    user(id:ID!):User!
    movies:[Movie!]!
    movie(name:String!):Movie!
  }

  input CreateUserInput{
    name:String!
    username:String!
    age:Int=18
    nationality:Nationality=INDIA
  }
  input UpdateUsername{
    id:ID!
    newUsername:String!

  }

  type Mutation{
    createUser(input:CreateUserInput!):User!
    updateUsername(input:UpdateUsername!):User!
    deleteUser(id:ID!):User!
  }


  enum Nationality {
    INDIA
    CHINA
    GERMANY
    BRAZIL
    CHILE
  }
`

module.exports = { typeDefs }
