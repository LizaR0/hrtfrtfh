import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Player from '../player/player'
import Feed from '../feeds/feed'
import Playlist from '../playlist/playlist'
import Trending from '../trending/trending'
import Favourites from '../favourites/favourites'
import './home.css'
// import Sidebar from '../Components/sidebar'
import Sidebar from '../../Components/sidebar'
import Login from '../auth/login'
// import SidebarButton from '../../Components/sidebar/sidebarButton'
import { useState, useEffect } from 'react'
import { setClientToken } from '../../spotify'




    



export default function Home() {
  const[token, setToken]= useState("")
  useEffect(() => {
    const token= window.localStorage.getItem("token");
    const hash= window.location.hash;
    window.location.hash="";
    if(!token && hash) {
      const _token= hash.split('&')[0].split('=')[1];
      window.localStorage.setItem("token", _token)
      setToken(_token);
      setClientToken(_token);
    } else
    {
      setToken(token);
      setClientToken(token);
    }
   
  }, [])
  
  return !token ? (  <Login/> ) :
  (
      <BrowserRouter>
    
      <div className='main-body'>
       
          <Sidebar/>
       <Routes>
           <Route path="/playlist"  element= {<Playlist/>} />
           <Route path="/feed"  element= {<Feed/>} />
           <Route path="/trending"  element= {<Trending/>} />
           <Route path="/player"  element= {<Player/>} />
           <Route  path="/favourites"  element= {<Favourites/>} />
       </Routes>
    
    </div>
    </BrowserRouter>
  );
}
