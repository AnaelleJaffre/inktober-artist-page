import { useState } from 'react'
import './Folder.css'
import Artwork from '../Artwork/Artwork'

function Folder() {

  return (
    <div className='folder'>
        <p>Folder</p>
        <div>
            <Artwork></Artwork>
        </div>
    </div>
  )
}

export default Folder
