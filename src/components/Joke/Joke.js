import React from "react";
import FormJoke from "./FormJoke";

function Joke(props) {
  console.log(props, "props");
  return (
    <div>
      <FormJoke addNewJoke={props.addNewJoke}/>
      {props.joke.map(form => {

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
