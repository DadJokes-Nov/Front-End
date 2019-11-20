import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import JokeCard from './JokeCard';

const Joke = ({getJokes, jokes}) => {
  useEffect(() => {
    if (jokes.length === 0) {
      console.log('getting jokes')
      getJokes();
    }
  }, [getJokes, jokes.length])

  return (
    <div>
      <h1>INSIDE JOKE!</h1>
      {jokes.map(joke => {
        return (
          <JokeCard key={joke.id} joke={joke} />
        )
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getJokes })(Joke);