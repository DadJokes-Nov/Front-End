//a user name, id, email, age, image, favorite jokes <-- array, 

//and jokes will be an array of objects with joke: and punchline:  

const initState = {
  user: {
    name: '',
    id: null,
    email: '',
    image_url: '',//this is where we will put default image
  },

  jokes: [
    {
      id: 0,
      joke: 'joke1',
      punchline: 'punchline1'
    },
    {
      id: 1,
      joke: 'joke2',
      punchline: 'punchline2'
    },
    {
      id: 2,
      joke: 'joke3',
      punchline: 'punchline3'
    },
    {
      id: 3,
      joke: 'joke4',
      punchline: 'punchline4'
    },
    {
      id: 4,
      joke: 'joke5',
      punchline: 'punchline5'
    }
  ],
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {

    default: 
      return { 
      ...state
    }
  }
};

