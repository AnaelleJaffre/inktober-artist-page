import { useState } from 'react'
import './Folder.css'
import Artwork from '../Artwork/Artwork'
import { getArtworks } from '../../utils/getArtworks'

function Folder({year}) {

  return (
    <div className='folder'>
        <h3>{year}</h3>
        <div>
          {getArtworks(year).map((artwork) => (
            <Artwork key={artwork.name} src={artwork.src} day={artwork.day} theme={artwork.theme} />
          ))}
        </div>
    </div>
  )
}

export default Folder
