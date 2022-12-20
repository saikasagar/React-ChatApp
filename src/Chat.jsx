import React from 'react'
import App from './App';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom';
const Chat = () => {
  // const [msg, setMsg] = React.useState('');
  const [message, setMessage] = React.useState([]);


  const handleSubmit=(e) =>{
    e.preventDefault()
    const msgInput = e.target.elements.message;
      const msg = msgInput.value;
        let msgObj = {
          id: Math.random,
          message:msg,
        }
        setMessage([msgObj,...message])
        console.log(message)
        msgInput.value=''
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="chat-container">
          <div className="chat-header">
            <h3>Chat</h3>
          </div>
          <div className="chat-messages">
            {
              message.map((res) => {
                return (
                  <div className="message-container sent" key={res.id}>
                    <p>{res.message}</p>
                  </div>
                )
              })
            }
            <div className="message-container received">
              <p>Hi there!</p>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" name="message" placeholder="Enter your message here" />
            <button>Send</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Chat
