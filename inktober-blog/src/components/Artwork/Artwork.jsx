import { useState } from 'react'
import './Artwork.css'

function Artwork({src, title}) {

  return (
    <div className='Artwork'>
        <img className='artworkImage' src={src} alt={title}></img>
    </div>
  )
}

export default Artwork
