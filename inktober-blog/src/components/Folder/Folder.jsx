import { useState } from 'react'
import './Folder.css'
import Artwork from '../Artwork/Artwork'
import { getArtworks } from '../../utils/getArtworks'
import arrow from '../../assets/images/utils/arrow.png'

function Folder({year}) {

  const[open, setOpen] = useState(true)

  return (
    <div className='folder'>
        <div className='toggleHeader' onClick={() => setOpen(!open)}>
          <img src={arrow} alt="arrow" className={open ? 'arrow' : 'arrow closed'}></img>
          <h3>{year}</h3>
        </div>

        {open && (
          <div className='artworksGrid'>
            {getArtworks(year).map((artwork) => (
              <Artwork key={artwork.name} src={artwork.src} day={artwork.day} theme={artwork.theme} />
            ))}
          </div>
        )}
    </div>
  )
}

export default Folder
