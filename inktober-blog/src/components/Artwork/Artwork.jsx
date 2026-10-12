import { useState } from 'react'
import './Artwork.css'

function Artwork({src, day, theme}) {

  return (
    <div className='artwork'>
        <img className='artworkImage' src={src}></img>
        <p style={{fontWeight: 'bold'}}>Day {day}</p>
        <p className='separator'>-</p>
        <p>{theme}</p>
    </div>
  )
}

export default Artwork
