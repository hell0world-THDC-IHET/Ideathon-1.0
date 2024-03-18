import React from 'react';

const Banner = (props) => {
  return (
    <div className="banner flex xs:flex-col ">
      <div className={`banner-1 p-5  w-4/12 transition-all duration-1000  hover:bg-gradient-to-r hover:to-emerald-500 hover:from-sky-500`}>
            <h3 className='unnamed p-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-white md:text-5xl lg:text-6xl'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500 hover:text-white">Unnamed</span>
            </h3>
        </div>
      <div className={`banner-2 p-5 w-6/12 bg-blue-500 `}>
      <h3 className='unnamed p-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-white md:text-5xl lg:text-6xl'>
          <span className=" hover:text-white ">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</span>
        </h3>
        <button className='text-xl ml-5 mt-10 font-extrabold text-gray-900 dark:text-white md:text-white md:text-3xl lg:text-4xl border border-white rounded p-2 hover:bg-white hover:text-blue-500 transition-all duration-300'>Event</button>
      </div>
    </div>
  );
};

export default Banner;
