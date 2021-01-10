import React, { useState } from 'react';
import db from './firebase.js';
import "./ChatInput.css";
import { useStateValue } from './StateProvider.js';
import firebase from "firebase";

export default function ChatInput({channelName,channelId}) {
    const [input,setInput] = useState('');
    const [{user}] = useStateValue();
    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            db.collection('rooms')
              .doc(channelId)
              .collection('messages')
              .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
              })
            setInput('');
        }
    }
    return (
        <div className="chatInput">
            <form>
                <input 
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                ></input>
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}
