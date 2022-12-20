import React from 'react'
import App from './App'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
    <div className="side-dashboard">
  <h2>Dashboard</h2>
  <ul>
   <a href='/chat' ><li>Home</li></a>
    <li>Messages</li>
    <li>Settings</li>
  </ul>
</div>

    </div>
  )
}

export default Dashboard