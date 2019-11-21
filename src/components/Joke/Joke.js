import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getJokes } from "../../store/actions/userAction";
import JokeCard from "./JokeCard";

const Joke = ({ getJokes, jokes }) => {
  const [random, setRandom] = useState(0);
  const [punch, setPunch] = useState(false);

  const [time, setTime] = useState(15);
  const [active, setActive] = useState(true);
  let interval = null;
  useEffect(() => {
    if (active && time > 0) {
      interval = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (punch) {
      const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    setRandom(randomJoke);
      setTime(15);
      setPunch(false);
    } else {
      setPunch(true);
      setTime(15);
    }
  }, [time, active]);

  useEffect(() => {
    if (jokes.length === 0) {
      console.log("getting jokes");
      getJokes();
    }
  }, [getJokes, jokes.length]);

  useEffect(() => {
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    console.log(randomJoke);
    setRandom(randomJoke);
  }, [jokes.length]);

  const newJoke = e => {
    e.preventDefault();
    const randomJoke = Math.floor(Math.random() * Math.floor(jokes.length));
    console.log(randomJoke);
    setRandom(randomJoke);
  };

  return (
    <div>
      <p>{time}</p>
      {jokes[random] && (
        <JokeCard
          key={jokes[random].id}
          joke={jokes[random]}
          punch={punch}
          setPunch={setPunch}
        />
      )}
      <button onClick={newJoke}>New Joke</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    jokes: state.jokes
  };
}

export default connect(mapStateToProps, { getJokes })(Joke);
