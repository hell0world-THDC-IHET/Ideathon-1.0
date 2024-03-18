import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="home">
        <Header/>
        <Navbar/>
        <Banner/>
        <Banner/>
        <Banner/>
        <Banner/>
    </div>
  )
}

export default Home