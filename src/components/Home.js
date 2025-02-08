import React from 'react'
import '../Style/Home.css'
import linkedin_logo from '../Images/linkedin_logo.png'
import github_logo from '../Images/github_logo.png'
import youtube_logo from '../Images/youtube_logo.png'
import saeed1 from "../Images/saeed1.png";
function Home() {

  return (
    <>
    <section className='home'>
         <div className="home-info">
            <h1>Hi, I'm Saeed Nagi</h1>
            <h2>I'm a <span style={{"--i":"4;"}} className='text11'>Frontend developer</span>          
            </h2>
            <div className="btn-sci">
                <a href="https://drive.google.com/file/d/12DGm-I7DkGNKVTDSRcrdLiwxNkiGuwa-/view?usp=sharing" className='btn' target="_blank" rel="noopener noreferrer">Download CV</a>
                <div className='sci'>
                <a href="https://www.linkedin.com/in/muhammad-saeed-nagi-37b1aa28a/" target="_blank"><img src={linkedin_logo} alt="" /></a>
                <a href="https://github.com/" target="_blank"><img src={github_logo} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCm0ys0lKtueZmThYr_t2QYA" target="_blank"><img src={youtube_logo} alt="" /></a>
                </div>
            </div>
         </div>
         <div className="home-img">
            <div className="img-box">
                <div className="img-item">
                    <img src={saeed1} alt="" />
                </div>
            </div>
         </div>
    </section>
       
    </>
  )
}

export default Home
