import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';

const Joke = ({getJokes, jokes}) => {
  console.log(jokes);
  useEffect(() => {
    getJokes();
  }, [getJokes])

  return (
    <div>
      <h1>INSIDE JOKE!</h1>
      {jokes.map(joke => {
        return (
          <>
          <h1>{joke.jokes_description}</h1>
          <h1>{joke.punchline}</h1>
          </>
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