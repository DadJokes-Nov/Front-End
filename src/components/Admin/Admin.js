import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';

const Admin = ({ getJokes, jokes }) => {
  // only want to get jokes if we haven't already!  Maybe we do want to update jokes all the time?  🤔
  useEffect(() => {
    if (jokes.length === 0) {
      console.log('getting jokes')
      getJokes();
    }
  }, [getJokes, jokes.length])
  return (
    <div>
      <h1>INSIDE ADMIN!</h1>
      {jokes.map(joke => {
        return (
          <>
          {/* Create cards for each joke.  Display all jokes with buttons for remove and edit. */}
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

export default connect(mapStateToProps, { getJokes })(Admin);