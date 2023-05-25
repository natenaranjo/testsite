import React from 'react'
import { AddFriendForm, FriendList } from '../context/db'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddFriendForm defaultAge={21} />
      <h2>Friend List</h2>
      <FriendList minAge={18} maxAge={65} />
    </div>
  )
}

export default Dashboard