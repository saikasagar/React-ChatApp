import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Chat from './chat';
import Dashboard from './Dashboard';

function App() {
  
  

  return(
    <Router>
      <Routes>
        <Route element ={<Login/>} path = "/"/>
        <Route element ={<Chat/>} path = "/chat"/>
        <Route element ={<Dashboard/>} path = "/dashboard"/>


      </Routes>
    </Router>
  );
  
}
export default App
