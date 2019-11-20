import React from 'react';

const AdminCard = ({joke: {id, punchline, jokes_description}}) => {
  return (
    <div>
      <h1>{jokes_description}</h1>
      <h1>{punchline}</h1>
    </div>
  );
};

export default AdminCard;