import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import JokeCard from './JokeCard';
import styled from "styled-components";
// import Axios from 'axios';

const Background = styled.div`
  background-color: #A8D0E6;
  margin: 0 auto;
`;

const JokeCardDiv = styled.div`

`;

const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  margin-top: -50%;
`;

const Button = styled.button`
  border-radius: 25px;
  background-color: #f76C6C;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  height: 40px;
  width: 250px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
`;

const Joke = ({getJokes, jokes}) => {
  const [random, setRandom] = useState(0)

  //do not delete - need for mvp assessment - lexie

  // const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://dad-jokes-2019.herokuapp.com/api/jokes')
  //   .then(res => {
  //     console.log(res);
  //     setJokes(res.data);
  //   }).catch(err => {
  //     console.log("There was an error.", err);
  //   })
  // }, [])

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
    <Background>
      <JokeCardDiv>
        {
          jokes[random] && <JokeCard key={jokes[random].id} joke={jokes[random]} />
        }
      </JokeCardDiv>
      <ButtonDiv>
        <Button onClick={newJoke}>New Joke</Button>
      </ButtonDiv>
    </Background>

    //do not delete - array method to meet mvp

    // {jokes.map(joke => {
    //   return (
    //     <JokeCard 
    //       key={joke.id} 
    //       id={joke.id} 
    //       jokes_description={joke.jokes_description} 
    //       punchline={joke.punchline} 
    //     />
    //   )
    // })}

  );
};

function mapStateToProps(state) {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getJokes })(Joke);