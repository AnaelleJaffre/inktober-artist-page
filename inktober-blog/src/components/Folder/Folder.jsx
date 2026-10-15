import { useState } from 'react'
import './Folder.css'
import Artwork from '../Artwork/Artwork'
import { getArtworks } from '../../utils/getArtworks'
import arrow from '../../assets/images/utils/arrow.png'

function Folder({year}) {

  return (
    <div className='folder'>
        <div className='toggleHeader'>
          <img src={arrow}></img>
          <h3>{year}</h3>
        </div>
        <div className='artworksGrid'>
          {getArtworks(year).map((artwork) => (
            <Artwork key={artwork.name} src={artwork.src} day={artwork.day} theme={artwork.theme} />
          ))}
        </div>
    </div>
  )
}

export default Folder
