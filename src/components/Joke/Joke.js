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

// button got moved so it can be inside card this code was moved not deleted!

// const ButtonDiv = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: auto;
//   margin-top: -50%;
// `;

// const Button = styled.button`
//   border-radius: 25px;
//   background-color: #f76C6C;
//   color: white;
//   font-weight: 500;
//   letter-spacing: 1px;
//   height: 40px;
//   width: 250px;
//   cursor: pointer;
//   font-family: 'Roboto', sans-serif;
// `;

const Joke = ({ getJokes, jokes }) => {
  const [random, setRandom] = useState(0);
  const [punch, setPunch] = useState(false);

  const [time, setTime] = useState(15);
  const [active, setActive] = useState(true);
  let interval = null;
  
  useEffect(() => {
    if (active) {
      if (time > 0) {
        interval = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      } else if (punch) {
        const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
        console.log('else if changing it')
        setRandom(randomJoke);
        setTime(15);
        setPunch(false);
      } else {
        setPunch(true);
        setTime(15);
      }
    }
  }, [time, active]);

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
    // if we have no jokes we need to get jokes from server
    if (jokes.length === 0) {
      getJokes();
    }
  }, [getJokes, jokes.length]);

  useEffect(() => {
    // this gets a random joke off first load
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    setRandom(randomJoke);
  }, [jokes.length]);

  const newJoke = () => {
    // this gets a random joke
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    setActive(false);
    setRandom(randomJoke);
  };

  return (

    <Background>
      <JokeCardDiv>
        {
          // this test that we actually have jokes before we display a joke
          jokes[random] && <JokeCard key={jokes[random].id} joke={jokes[random]} newJoke={newJoke} jokesLength={jokes.length} punch={punch} setPunch={setPunch} time={time} active={active} setActive={setActive} />
        }
      </JokeCardDiv>
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
  };
}

export default connect(mapStateToProps, { getJokes })(Joke);
