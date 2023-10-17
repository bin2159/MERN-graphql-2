const { UserList, MovieList } = require('../Data')
const _ = require('lodash')
const resolvers = {
  User: {
    favoriteMovie: () =>
      MovieList.filter(
        (movie) =>
          movie.yearofPublication >= 2000 && movie.yearofPublication <= 2010
      ),
  },
  Query: {
    users: () => UserList,
    user: (parent, args) =>
      UserList.find((user) => user.id === Number(args.id)),
    movies: () => MovieList,
    movie: (parent, args) =>
      MovieList.find((movie) => movie.name === (String(args.name))),
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input
      const lastId = UserList[UserList.length - 1].id
      user.id =String( Number(lastId) + 1)
      UserList.push(user)
      return user
    },
    updateUsername:(parent,args)=>{
      const id=args.input.id
      const user=UserList.find(user=>user.id===Number(id))
      user.username=args.input.newUsername
      return user
    },
    deleteUser:(parent,args)=>{
      const id=args.id
      const userIndex=UserList.findIndex(user=>user.id===Number(id))
      const userList=UserList.splice(userIndex,1)
      return userList
    }
  },
}

module.exports = { resolvers }
