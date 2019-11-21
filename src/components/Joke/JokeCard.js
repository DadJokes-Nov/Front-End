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

const JokeCard = ({joke: {punchline, jokes_description}, newJoke}) => {
  const [punch, setPunch] = useState(false);

  const showPunch = e => {
    e.preventDefault();
    setPunch(true);
  }

  const next = e => {
    e.preventDefault();
    setPunch(false);
    newJoke();
  }
  return (
    <Container>
      <CardDiv>
        <CardInnerDiv>
          <JokeDesc>{jokes_description}</JokeDesc>

          {!punch && 
          <Button onClick={showPunch}>Git Joke 🤣🤣</Button>
          }
          {/* button click shows puncline and is always set back to false on newJoke! */}
          {punch && <h2>{punchline}</h2>
          }
          <Button onClick={next}>Next Joke</Button>
        </CardInnerDiv>
      </CardDiv>
    </Container>
  );
};

export default JokeCard;