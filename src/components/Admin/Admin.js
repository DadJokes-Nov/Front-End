import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import AdminCard from './AdminCard';
import AdminAddJoke from './AdminAddJoke';
import { classes } from 'istanbul-lib-coverage';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  background:{
    backgroundColor: '#A8D0E6',
    height: '100vh',
    width: '100%'
  }
})

const Admin = ({ getJokes, jokes }) => {
  // only want to get jokes if we haven't already!  Maybe we do want to update jokes all the time?  🤔
  useEffect(() => {
    if (jokes.length === 0) {
      getJokes();
    }
  }, [getJokes, jokes.length])
  
  const classes = useStyles();

  return (
    <div className={classes.background}>
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