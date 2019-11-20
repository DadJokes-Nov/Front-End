import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function WelcomePage() {

const Head = styled.h1`
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    margin-top: 10%;
;`

const Button1 =styled.button`
    font-size: 1.2rem;
    border-radius: 5px;
    font-family: 'Source Code Pro', monospace;
    margin-top: 5%;
    box-shadow: 2px 2px 6px #24305E;
    color: white;
    background: #24305E;
    border: 1px solid white;
    margin-left: 47%;
;`

const Button2 =styled.button`
    font-size: 1.2rem;
    border-radius: 5px;
    font-family: 'Source Code Pro', monospace;
    margin-top: 10%;
    box-shadow: 2px 2px 6px #24305E;
    color: white;
    background: #24305E;
    border: 1px solid white;
    margin-left: 48%;
;`

const Wub =styled.div`
    text-align: center;
    padding: 3%;
    font-family: 'Source Code Pro', monospace;
    margin-top: 5%;
;`


return (
    <section className="welcome-page">
        <header>
            <div>
                <Head>Welcome to the ultimate Dad Joke site!</Head>
                <Wub>SUP</Wub>
                <div>
                    <Link to="/register"><Button1>Register</Button1></Link>
                </div>
                <div>
                    <Link to="/login"><Button2>Log In</Button2></Link>
                </div>
            </div>
        </header>
    </section>
);

}