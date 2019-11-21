import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../../store/actions/userAction';
import JokeCard from './JokeCard';
import styled from "styled-components";

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
  );
};

function mapStateToProps(state) {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getJokes })(Joke);