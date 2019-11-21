import React, { useState } from 'react';

const JokeCard = ({joke: {punchline, jokes_description}, setPunch, punch}) => {
  

  const showPunch = e => {
    e.preventDefault();
    setPunch(true);
  }
  return (
    <div>
      <h1>{jokes_description}</h1>
      {/* we will hide punchline til a button that we build in this component is created. */}
      <button onClick={showPunch}>Show Punchline</button>
      {punch && <h1>{punchline}</h1>
      }
    </div>
  );
};

export default JokeCard;