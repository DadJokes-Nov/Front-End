import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateJoke, deleteJoke } from '../../store/actions/userAction';

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
    padding: '50px',
    borderRadius: 25,
    width: 500,
    margin: 50,
    height: 300,
    boxShadow: '0 15px 60px 0 #374785',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc:{
    width: 400,
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center'
  },
  punch:{
    fontFamily: 'Roboto, sans-serif',
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
  }
})


const AdminCard = ({joke: {id, punchline, jokes_description}, updateJoke, deleteJoke}) => {
  console.log('card', id, punchline, jokes_description);
  const [joke, setJoke] = useState({description: jokes_description, punchline: punchline})

  const classes = useStyles();

  const changeHandler = e => {
    e.persist();
    setJoke({...joke, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    updateJoke(id, joke)
  }

  const handleDelete = e => {
    e.preventDefault();
    console.log('deleting')
    deleteJoke(id);
  }

  return (
    <div className={classes.cont}>
      <form className={classes.card} onSubmit={handleSubmit}>
        <input 
        type='text'
        name='description'
        onChange={changeHandler}
        placeholder='description'
        value={joke.description}
        className={classes.desc}
        />
        <input
        type='text'
        name='punchline'
        onChange={changeHandler}
        placeholder='punchline'
        value={joke.punchline}
        className={classes.punch}
        />
        <button className={classes.butt}>Save Joke</button>
      </form>
      <button className={classes.butt2} onClick={handleDelete}>Delete</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, { updateJoke, deleteJoke })(AdminCard);