import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import './player.css'
import { useEffect } from 'react';
import SongCard from '../../Components/songcard';
import Queue from '../../Components/queue';
import './player.css'
import AudioPlayer from '../../Components/audioPlayer';

export default function Player() {
  const location= useLocation();
  // console.log(location);
  const[tracks, setTracks] = useState([]);
  const[currentTrack, setCurrentTrack]= useState({});
  const[currentIndex, setCurrentIndex]= useState(0);

useEffect(() => {
  if(location.state){
    apiClient.get("playlists/"+ location.state?.id +"/tracks")
    .then((res) => 
    // console.log(res.data)
    {
      setTracks(res.data.items);
      setCurrentTrack(res.data?.items[0]?.track);
    }
    );
  }  
}, [location.state]);

useEffect(() => {
  setCurrentTrack(tracks[currentIndex]?.track);
}, [currentIndex, tracks]);



  return (
    // <div className='screen-container flex'>
    //   <div className='left-player-body'></div>
    //   <AudioPlayer currentTracko={currentTrack}/>
    //   <div className='right-player-body'></div>
    //   <SongCard album={currentTrack.album}/>
    //   <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
    // </div>

    <div className="screen-container flex">
    <div className="left-player-body">
      <AudioPlayer
        currentTrack={currentTrack}
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isPlaying={true}
      />
      {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
    </div>
    <div className="right-player-body">
      <SongCard album={currentTrack?.album} />
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
    </div>
  </div>
  );
}
