import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateJoke, deleteJoke } from '../../store/actions/userAction';

const AdminCard = ({joke: {id, punchline, jokes_description}, updateJoke, deleteJoke}) => {
  const [joke, setJoke] = useState({description: jokes_description, punchline: punchline})

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
    <div>
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
        <button>Save Joke</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, { updateJoke, deleteJoke })(AdminCard);