import React from 'react';
import WelcomePage from './WelcomePage';
const Home = () => {
  return (
    <div>
      {/* we may think about just getting rid of this route as its purpose is not really clear yet. */}
      <WelcomePage />
    </div>
  );
};

export default Home;