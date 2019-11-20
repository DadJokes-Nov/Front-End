import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import JokeCard from './JokeCard';

const Joke = ({getJokes, jokes}) => {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    if (jokes.length === 0) {
      console.log('getting jokes')
      getJokes();
    }
  }, [getJokes, jokes.length])

  useEffect(() => {
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    console.log(randomJoke);
    setRandom(randomJoke);
  }, [jokes.length])

  const newJoke = e => {
    e.preventDefault();
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    console.log(randomJoke);
    setRandom(randomJoke);
  }

  return (
    <div>
      {
        jokes[random] && <JokeCard key={jokes[random].id} joke={jokes[random]} />
      }
      <button onClick={newJoke}>New Joke</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getJokes })(Joke);