import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../../store/actions/userAction'

const initialState = {
  description: '',
  punchline: '',
}

const AdminAddJoke = ({addJoke}) => {
  const [joke, setJoke] = useState(initialState);

  const changeHandler = e => {
    e.persist();
    setJoke({...joke, [e.target.name]: e.target.value})  
  }

  const handleSubmit = e => {
    e.preventDefault();
    addJoke(joke);
    // this is where we will fire our redux add function.
  }

  return (
    // feel free to turn this into formik if you want! 🎨
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      name='description'
      onChange={changeHandler}
      placeholder='description'
      value={joke.description}
      />
      <input
      type='text'
      name='punchline'
      onChange={changeHandler}
      placeholder='punchline'
      value={joke.punchline}
      />
      <button>Add Joke</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, { addJoke })(AdminAddJoke);