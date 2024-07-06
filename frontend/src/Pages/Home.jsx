import React from 'react'
import Card from '../Components/Card'
import New from './New'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div>Home
      <Link to={'/new'}>New Hello</Link>
      <Card/>
    </div>
  )
}

export default Home