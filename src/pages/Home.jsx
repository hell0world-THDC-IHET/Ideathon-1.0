import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Progess from '../components/Progess'
import Designer from '../components/Required'

const Home = () => {
  return (
    <div className="home">
        <Header/>
        <Navbar/>
        <Progess/>
        <Designer/>
    </div>
  )
}

export default Home