import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillRobot } from 'react-icons/ai';
import React from 'react'
import Robot from '../assets/robot.png'
import Robothand from '../assets/robothand.png'
import Navbar from './Navbar'

import '../Style.css'

function Home () {
  return (
    <div id='backgroundcolor' className='Home'>
        <Navbar />
        <div className='homeitems'>
            <div className='slogan'>
                <div>
                    <h1>
                        Robot Tireless Companions
                    </h1>
                </div>
            </div>
            <div>
                <img className='Robot' src={ Robot } />
            </div>
        </div>
        <div className='homeitems2'>
            <button className='getonebtn'>Get One Now!</button>
            <div className='robothand2'>
                <img className='robothand' src={ Robothand } />
            </div>
        </div>
        <div className='homeitems3'>
            <h1 className='Roboticon'> <AiFillRobot /> </h1>
            <p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;The <span>AI-Robot X5000</span>   is an advanced smart companion with AI-powered capabilities. </p>
        </div>
        <div className='iconcolors'>
            <h1> <AiFillGithub /> </h1>
            <h1> <AiFillLinkedin /> </h1>
            <h1> <AiFillFacebook /> </h1>
        </div>
    </div>
  )
}

export default Home