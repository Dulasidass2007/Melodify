import React from 'react';
import { RiSpotifyLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import "./Navbar.css";
import '../Sidebar/Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      
        <div className="navbar">
          <div className="navbar1">
            <ul style={{ display: "flex", alignItems: "center", gap: "20px", listStyleType: "none" ,fontSize:"25px"}}>
              <li><RiSpotifyLine /></li>
              <li onClick={() => navigate('/')}><IoHomeOutline /></li>
              <li><IoIosSearch /></li>
              <li>
                <input
                  type="text"
                  placeholder="What do you want to play?" className="input-box" />
              </li>
            </ul>
          </div>
          <div className="navbar2">
            <ul style={{ display: "flex", alignItems: "center", gap: "20px", listStyleType: "none" }}>
              <li onClick={() => navigate('/premium')}>Premium</li>
              <li onClick={() => navigate('/Support')}>Support</li>
              <li>Download</li>
              <li>
                {/* <button className="button">Sign Up</button> */}
                <button className="button" onClick={() => navigate('/login')}>Log In</button>
              </li>
            </ul>
          </div>
        </div>
      
      <div className="sidebar">
        <h3>Your library</h3>
        <div style={{borderTop: "1px solid gray", marginTop: "10px", marginBottom: "10px"}}></div> 
        <LuPlus /><label>Create Playlist</label>
      </div>
    

    </>
  );
}

export default Navbar;