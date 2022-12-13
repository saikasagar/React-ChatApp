import React from 'react'
import App from './App';
import { useEffect,useState } from 'react';
import{useNavigate} from 'react-router-dom';


import ReactDOM from 'react-dom';


const Chat = () => {
// const [msg, setMsg] = React.useState('');
const [message, setMessage] = React.useState([]);
const addMessages=(msg)=>{
    setMessage([...message, msg])
    console.log(message)
}
const handleSubmit=(e)=>{
  e.preventDefault()
  const msgInput = e.target.elements.message;
  const msg = msgInput.value;

  addMessages(msg);
  msgInput.value=''
}

  return (
    <div>hello</div>
    // <form onSubmit={handleSubmit}>
    // <div className="chat-container">
    //   <div className="chat-header">
    //     <h3>Chat</h3>
    //   </div>
    //   <div className="chat-messages">
    //     <div className="message-container sent">
    //       <p>Hello!</p>
    //     </div>
    //     <div className="message-container received">
    //       <p>Hi there!</p>
    //     </div>
    //   </div>
    //   <div className="chat-input">
    //     <input type="text" name="message" placeholder="Enter your message here" />
    //     <button>Send</button>
    //   </div>
    // </div>
    // </form>  
    )
}

export default Chat
