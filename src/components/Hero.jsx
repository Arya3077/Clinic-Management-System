import React from 'react'
import Typewriter from 'typewriter-effect'



const Home = () => {
  return (
    <section id="home" className="flex justify-center items-center">
      <div className="relative bg-[#39063C] sm:h-[300px] md:h-[600px] w-full max-w-7xl rounded-2xl flex justify-center items-center text-5xl text-amber-50 font-bold overflow-hidden">

       
        <img
          src="doctor.png" 
          alt="Doctor"
          className="absolute left-5 bottom-0 h-[70%] object-contain z-0"
        />

       
        <div className="relative w-full h-full">
  {/* Typewriter Text */}
  <div className="absolute top-1/2 right-25 transform -translate-y-1/2 text-right z-20">
    <Typewriter
      options={{
        strings: [
          "World Class Health Facilities",
          "At Your Door Step!"
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  
  </div>
</div>
</div>
    </section>
  );
};

export default Home;
