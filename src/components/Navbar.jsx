import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar flex justify-between bg-slate-100">
  <div className="logo p-4">
    <img src="" alt="logo" />
  </div>
  <div className="navbar-links flex">
    <div className="home-link  p-4 hover:bg-blue-600 hover:transition-all hover:duration-300">
      <a href="/">Home</a>
    </div>
    <div className="about-link mr-5 p-4  hover:bg-blue-600 hover:transition-all hover:duration-300">
      <a href="/about">About</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar