import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import React, { useState, useTransition } from "react";

const QUERY_ALL_USERS = gql`
  query GetAllUser {
    users {
      name
      id
      username
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
      yearofPublication
      isInTheaters
    }
  }
`;
const GET_MOVIE_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      isInTheaters
      yearofPublication
    }
  }
`;
const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!  ) {
    createUser(input: $input) {
      id
      name
      username
      age
      nationality
    }
  }
`;

const Data = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [username, setUsername] = useState();
  const [nationality, setNationality] = useState();

  const [movieName, setMovieName] = useState(null);
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
  } = useQuery(QUERY_ALL_MOVIES);
  const [
    fetchMovie,
    {
      data: movieByName,
      loading: movieByNameLoading,
      called: movieByNameCalled,
    },
  ] = useLazyQuery(GET_MOVIE_NAME);
  const [createUser]=useMutation(CREATE_USER_MUTATION)
  if (loading || movieLoading) {
    return <h1>Data is loading</h1>;
  }
  if (error || movieError) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={(e) => setNationality(e.target.value)}
        />
        <button
          onClick={() =>
            createUser({
              variables: {
                input: { name, username, age:Number(age), nationality },
              },
            })
          }
        >

          Submit
        </button>
      </div>
      <input
        input="text"
        placeholder="Enter Movie Name"
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          fetchMovie({
            variables: {
              name: movieName,
            },
          });
          setMovieName(null);
        }}
      >
        Get Movie
      </button>
      {movieByName && (
        <div>
          <h1>{movieByName.movie.name}</h1>
          <h1>{movieByName.movie.yearofPublication}</h1>
        </div>
      )}
      {data &&
        data.users.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <br></br>
          </div>
        ))}

      {movieData &&
        movieData.movies.map((movie) => (
          <div key={movie.id}>
            <h1>Movie: {movie.name}</h1>
            <h1>Year of Publication:{movie.yearofPublication}</h1>
            <h1>Is In Theater:{movie.isInTheaters ? "true" : "false"}</h1>
            <br></br>
          </div>
        ))}
    </>
  );
};

export default Data;
