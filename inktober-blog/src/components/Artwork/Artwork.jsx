import { useState } from 'react'
import './Artwork.css'

function Artwork({src, index, day, theme}) {

  return (
    <div className='artwork' style={{'--i' : index}}>
        <img className='artworkImage' src={src}></img>
        <p style={{fontWeight: 'bold'}}>Day {day}</p>
        <p className='separator'>-</p>
        <p>{theme}</p>
    </div>
  )
}

export default Artwork
