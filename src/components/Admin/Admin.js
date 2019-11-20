import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import AdminCard from './AdminCard';
import AdminAddJoke from './AdminAddJoke';

const Admin = ({ getJokes, jokes }) => {
  // only want to get jokes if we haven't already!  Maybe we do want to update jokes all the time?  🤔
  useEffect(() => {
    if (jokes.length === 0) {
      getJokes();
    }
  }, [getJokes, jokes.length])
  
  return (
    <div>
      <AdminAddJoke />
      {jokes.map(joke => {
        return (
          <AdminCard key={joke.id} joke={joke} />
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