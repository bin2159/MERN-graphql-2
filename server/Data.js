const UserList = [
    {
      id: 1,
      name: "shivam",
      username: "shivam123",
      age: 20,
      nationality: "INDIA",
      friends: [
        {
          id: 2,
          name: "muskan",
          username: "muskan123",
          age: 20,
          nationality: "PAKISTAN",
        },
        {
          id: 5,
          name: "shruti",
          username: "shruti202",
          age: 5,
          nationality: "INDIAN",
        },
      ],
    },
    {
      id: 2,
      name: "miami",
      username: "miami201",
      age: 20,
      nationality: "CHINA",
    },
    {
      id: 3,
      name: "Sarah",
      username: "cameron",
      age: 25,
      nationality: "INDIA",
      friends: [
        {
          id: 2,
          name: "Pedro",
          username: "PedroTech",
          age: 20,
          nationality: "BRAZIL",
        },
      ],
    },
    {
      id: 4,
      name: "Rafe",
      username: "rafe123",
      age: 60,
      nationality: "GERMANY",
    },
    {
      id: 5,
      name: "Kelly",
      username: "kelly2019",
      age: 5,
      nationality: "CHILE",
    },
  ];
  const MovieList = [
    {
      id: 1,
      name: "Bahubali",
      yearofPublication: 2019,
      isInTheaters: true,
    },
    {
      id: 2,
      name: "gajini",
      yearofPublication: 2007,
      isInTheaters: true,
    },
    {
      id: 3,
      name: "khiladi",
      yearofPublication: 2009,
      isInTheaters: true,
    },
    {
      id: 4,
      name: "the coder",
      yearofPublication: 2035,
      isInTheaters: false,
    },
  ];

  module.exports={UserList,MovieList};