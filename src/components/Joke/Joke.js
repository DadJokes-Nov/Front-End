import React from "react";

function Joke(props) {
  console.log(props, "props");
  return (
    <div>
      {props.Joke.map(form => {
        return (
          <div>
            <p>{form.addJoke}</p>
            <p>{form.punchLine}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Joke;
