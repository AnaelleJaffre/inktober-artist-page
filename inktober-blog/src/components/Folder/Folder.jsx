import { useState } from 'react'
import './Folder.css'
import Artwork from '../Artwork/Artwork'
import Foreground from '../Foreground/Foreground'
import { getArtworks } from '../../utils/getArtworks'
import arrow from '../../assets/images/utils/arrow.png'

function Folder({year}) {

  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState(null)

  return (
    <div className={open ? 'folder' : 'folder closed'}>
        <div className='toggleHeader' onClick={() => setOpen(!open)}>
          <img src={arrow} alt="arrow" className={open ? 'arrow' : 'arrow closed'}></img>
          <h3>{year}</h3>
        </div>

        <div className='artworksWrapper'>
          <div className='artworksGrid'>
            {getArtworks(year).map((artwork, i) => (
              <Artwork key={artwork.name} src={artwork.src} index={i} day={artwork.day} theme={artwork.theme} onSelect={() => setSelected(artwork)} />
            ))}
          </div>
        </div>

        {selected && 
          <Foreground {...selected} onClose={() => setSelected(null)}></Foreground>
        }

    </div>
  )
}

export default Folder
