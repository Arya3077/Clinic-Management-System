import React from 'react'
import './Home.css'
import img from './img2.png'
import Group from './Group.png'
import teeth from './teeth.png'
import lung from './lung.png'
import heart from './heart.png'
import brain from './brain.png'

const Home = () => {
  return (
    <>
    <div className="h">
      <div className='hero'>
        <img className='hi' src={img} alt="Description" />
        <p>World Class Facilities <br></br>At Your Door Step &rarr; </p>
      </div>
      <div className="hb">
      <div className="b"></div>
      <div className="b"></div>
      <div className="b"></div>
      <div className="b"></div>
      </div>
    </div>

    <div className="search">
      <div className="s">
        <div className="b1">NEURO</div>
        <div className="b1">CARDIO</div>
        <div className="b1">DENTAL</div>
        <div className="b1">ENT</div>
        <div className="s1">SEARCH</div>
      </div>
    </div>
 <div className="c">
  <div className="simage">
    <div className="img4">
      <img  className="img4" src={teeth} alt="Description" />
      </div>
      </div>

       <div className="simage">
    <div className="img4">
      <img  className="img4" src={lung} alt="Description" />
      </div>
      </div>

       <div className="simage">
    <div className="img4">
      <img  className="img4" src={brain} alt="Description" />
      </div>
      </div>

       <div className="simage">
    <div className="img4">
      <img  className="img4" src={heart} alt="Description" />
      </div>
      </div>
      </div>

       <div className="h2">
      <div className='hero2'>
        
        <p>World Class Facilities <br></br>At Your Door Step &rarr; </p>
      </div>
      </div>

      <div className="footer">
        
      </div>
</>
    
  )
}

export default Home
