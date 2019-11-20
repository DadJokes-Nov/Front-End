import React, { useState } from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
  padding-top: 10%;
  margin: auto;
  background-color: #A8D0E6;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const CardInnerDiv = styled.div`
  width: 500px;
  height: 300px;
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
`;

const JokeCard = ({joke: {punchline, jokes_description}}) => {
  const [punch, setPunch] = useState(false);

  const showPunch = e => {
    e.preventDefault();
    setPunch(true);
  }
  return (
    <CardDiv>
      <CardInnerDiv>
        <JokeDesc>{jokes_description}</JokeDesc>
        {/* we will hide punchline til a button that we build in this component is created. */}
        <Button onClick={showPunch}>Show Punchline</Button>
        {punch && <h1>{punchline}</h1>
        }
      </CardInnerDiv>
    </CardDiv>
  );
};

export default JokeCard;