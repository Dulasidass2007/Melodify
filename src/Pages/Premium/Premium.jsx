import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Premium.css'
function Premium() {
  return (
   <> <div>
        <Navbar/> 
    </div>
   <div className='premium'> <div className='premium-body'>
        <h1>Get Premium Free for 1 Month</h1>
        <button className='premium-button'>Get Started</button>
        <p>Only $9.99/month after. Cancel anytime.</p>
    </div></div>
    <div className='premium-info'>
        
        <div className='info-cards'> 
            <h1>Lite</h1>
            $139/year
            <hr/>
            <p>Listen to music with ads</p>
            <p>Play any song, anytime on mobile and tablet</p>
            <button className='info-button'>Get Lite</button>   
             </div>
        <div className='info-cards'> 
            <h1>Individual</h1>
            $9.99/month
            <hr/>   
            <p>Listen to music without ads</p>
            <p>Play any song, anytime on mobile and tablet</p>
            <p>Download music to listen offline</p> 
            <button className='info-button'>Get Individual</button>  
             </div>
        <div className='info-cards'>
            <h1>Family</h1>
            $15.99/month
            <hr/>  
            <p>6 Premium accounts for family members living under one roof</p>
            <p>Block explicit music</p>
            <p>Play any song, anytime on mobile and tablet</p>
            <p>Download music to listen offline</p> 
            <button className='info-button'>Get Family</button>             
             </div>
    
    </div>   
        {/* <footer className='premium-footer'>
            <p>Offer terms and conditions apply. See <a href='#'>Spotify.com/premium/terms</a> for more details. 
                1 month free not available for users who have already tried Premium. 
                Price and availability of Premium may vary by location. 
                After your free month, you will be automatically charged the monthly subscription fee of the plan you choose.</p>
        </footer> */}
    </>
  )
}

export default Premium