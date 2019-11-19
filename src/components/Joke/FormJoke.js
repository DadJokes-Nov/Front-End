import React, { useState } from "react";

function Form(props) {
    const [form, setForm] = useState({addJoke: "", punchLine: ""})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newJoke ={
            ...form,
            id:Date.now()
        }
        props.addNewJoke(newJoke);
        setForm({addJoke: "", punchLine: ""});
    }
    return (
        <form onSubmit={submitForm}>
            <label hmtlFor="punch-line">Add Joke</label>
            <input 
            type="text" 
            placeholder="Add Joke"
            name="punch-line"
            value={form.name}
            onChange={changeHandler}/>
            <label htmlFor="punch-line">Punch Line</label>
            <input 
            type="text"
            name="punch-line"
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;