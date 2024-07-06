import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div>Home
      <Navbar/>
      <Link to={'/new'}>New Hello</Link>
      <Card/>
    </div>
  )
}

export default Home