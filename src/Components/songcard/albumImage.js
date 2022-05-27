import React from 'react'
import './albumImage.css'
export default function AlbumImage({url}) {
    // console.log(url)
  return (
    <div>
        <div className='albumImage flex'>
            <img src= {url} alt="album..image" className='albumImage-art'/>
            <div className='albumImage-shadow'>
        <img src= {url} alt="album..shadow" className='albumImage-shadow'/>
        </div>
            </div> 
       
    </div>
  )
}
