import { useState } from 'react'
import './App.css'
import Folder from './components/Folder/Folder'
import Wheats from './components/Wheats/Wheats'
import { years } from './utils/getArtworks'
import backgroundTheme from './assets/sound/background_theme.mp3'
import soundOnIcon from './assets/images/utils/sound_on.png'
import soundOffIcon from './assets/images/utils/no_sound.png'

const backgroundSound = new Audio(backgroundTheme)
backgroundSound.loop = true
backgroundSound.volume = 0.08
backgroundSound.play()

function App() {

  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (playing) backgroundSound.pause()
    else backgroundSound.play()
    setPlaying(!playing)
  }

  return (
    <>

    <button className='musicButton' onClick={toggleMusic}>
      <img src={playing ? soundOnIcon : soundOffIcon}  alt={playing ? 'Sound OFF' : 'Sound ON'}></img>
    </button>

    <h1>Inktober</h1>
    <h2>By Amonshage</h2>

    {years.map((year) => <Folder key={year} year={year}/>)}

    <Wheats></Wheats>

    <footer>
      <p>© Amonshage - 2026 | All rights reserved</p>
    </footer>
    </>
  )
}

export default App
