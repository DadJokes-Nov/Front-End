import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../../store/actions/userAction'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cont:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card:{
    backgroundColor: 'white',
    borderRadius: 25,
    width: '80%',
    margin: '5%',
    minHeight: 300,
    boxShadow: '0 15px 60px 0 #374785',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc:{
    width: 500,
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    margin: 20,
    resize: 'none'
  },
  punch:{
    width: 500,
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    margin: 20,
    resize: 'none'
  },
  butt:{
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 25,
    backgroundColor: '#f76C6C',
    color: 'white',
    fontWeight: 500,
    letterSpacing: 1,
    height: 40,
    width: '40%',
    cursor: 'pointer'
  },
  butt2:{
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 25,
    backgroundColor: '#f76C6C',
    color: 'white',
    fontWeight: 500,
    letterSpacing: 1,
    height: 40,
    width: 250,
    cursor: 'pointer'
  },
  form:{
    width: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const initialState = {
  description: '',
  punchline: '',
}

const AdminAddJoke = ({addJoke, jokeSuccess}) => {
  const [joke, setJoke] = useState(initialState);
  
  const classes = useStyles();

  const changeHandler = e => {
    e.persist();
    setJoke({...joke, [e.target.name]: e.target.value})  
  }

  const handleSubmit = e => {
    e.preventDefault();
    // addJoke from redux
    addJoke(joke);
    // setJoke to empty 
    setJoke(initialState);
  }

  return (
    // feel free to turn this into formik if you want! 🎨
    <div className={classes.cont}>
      <div className={classes.card}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h2 className={classes.punch}>Add Jokes!</h2>
          <textarea rows='3' cols='25'
          type='text'
          name='description'
          onChange={changeHandler}
          placeholder='description'
          value={joke.description}
          className={classes.desc}
          />
          <textarea rows='3' cols='25'
          type='text'
          name='punchline'
          onChange={changeHandler}
          placeholder='punchline'
          value={joke.punchline}
          className={classes.punch}
          />
          {/* might want a success message here so user sees their joke was added! */}
          {jokeSuccess && (<h2>{jokeSuccess}</h2>)}
          <button className={classes.butt}>Add Joke</button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    jokeSuccess: state.jokeSuccess
  }
}

export default connect(mapStateToProps, { addJoke })(AdminAddJoke);