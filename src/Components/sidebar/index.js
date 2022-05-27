import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify';
import './sidebar.css'
import SidebarButton from './sidebarButton'
// import { FaArrowUp} from 'react-icons/fa';

export default function Sidebar() {
  const [image,setImage] = useState('profile.png');
  useEffect(()=>{
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);})
  }, [])
  return (
    <div className='sidebar-container'>
    <img src= {image} className='profile-img' alt='profile' />
    <div>
    {/* {/* <SidebarButton/> */}
    <SidebarButton title="favourites" to="/favourites"/>
    <SidebarButton title="trending" to="/trending"/>
    <SidebarButton  title="feed" to="/feed" /> 
    <SidebarButton title="playlist" to="/playlist"  />
    <SidebarButton title="player" to="/player"  />
    </div>
    {/* <div>
      <Sidebar/>
    </div> */}
    
    </div>
    
      
  )
}
