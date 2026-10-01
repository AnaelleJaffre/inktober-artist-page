import { useState } from 'react'
import './Artwork.css'

function Artwork() {

    const images = import.meta.glob('../../assets/images/artworks/**/*.jpeg', {
    eager: true,
    import: 'default',
    })

    const apple = images['../../assets/images/artworks/2026/inktober-2026-day1-apple.jpeg']

  return (
    <div className='Artwork'>
        <p>Artwork</p>
        <img className='artworkImage' src={apple} alt='Apple, day 1'></img>
    </div>
  )
}

export default Artwork
