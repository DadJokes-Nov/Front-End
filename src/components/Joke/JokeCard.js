import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: #A8D0E6;
  height: 100vh;
`;

const CardDiv = styled.div`
  padding-top: 10%;
  margin: auto;
  background-color: #A8D0E6;
  display: flex;
  justify-content: center;
  height: 50vh;
`;

const CardInnerDiv = styled.div`
  width: 80%;
  height: 60vh;
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 15px 60px 0 #374785;
`;

const JokeDesc = styled.h2`
  padding: 5%;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  margin-top: 3%;
  border-radius: 25px;
  background-color: #f76C6C;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  height: 40px;
  width: 200px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
`;

const JokeCard = ({joke: {id, punchline, jokes_description}, newJoke, jokesLength, setPunch, punch, time, active, setActive}) => {

  const showPunch = e => {
    e.preventDefault();
    setPunch(true);
    setActive(false);
  }

  const next = e => {
    e.preventDefault();
    setPunch(false);
    newJoke();
  }

  const handleCheck = e => {
    e.preventDefault();
    setActive(!active);
  }


  return (
    <Container>
      <CardDiv>
        <CardInnerDiv>
          {active && <p>{time}</p>}

          <h3>Joke # {id}/{jokesLength +50}</h3>{/*jokesLength <-- this is how we should do it but we should assign each joke a new # because ID won't help with deletes.  So +50 makes us look like we have a lot too :D*/}
          
          <JokeDesc>{jokes_description}</JokeDesc>
          {!punch && 
          // button will not be visible when punchline is being shown
          <Button onClick={showPunch}>Git Joke <span role='img' aria-label='laugh'>🤣🤣</span></Button>
          }
          {/* button click shows puncline and is always set back to false on newJoke! */}
          {punch && <h2>{punchline}</h2>
          }
          <Button onClick={next}>Next Joke</Button>
          <label>Auto Scroll
            <input type="checkbox" 
              checked={active}
              onClick={handleCheck}
          /></label>
        </CardInnerDiv>
      </CardDiv>
    </Container>
  );
};

export default JokeCard;