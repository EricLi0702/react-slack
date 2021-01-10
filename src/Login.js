import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import {auth, provider} from "./firebase.js"
export default function Login() {
    const signIn = (e) =>{
        e.preventDefault();
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://digidomain.in/wp-content/uploads/2019/07/Slack-logo.png"
                    alt=""
                ></img>
                <h1>Sign in to CLever Programmer HQ</h1>
                <p>superpromiser.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}
