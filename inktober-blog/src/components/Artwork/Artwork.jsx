import './Artwork.css'
import artworkSound from '../../assets/sound/artwork_hover_sound.mp3'

const playHover = () => {
  const artworkHoverSound = new Audio(artworkSound)
  artworkHoverSound.volume = 0.2
  artworkHoverSound.play()
}

function Artwork({src, index, day, theme, onSelect}) {

  return (
  <div className='artwork' style={{'--i' : index}} onClick={onSelect} onMouseEnter={playHover}>
        <img className='artworkImage' src={src} alt={theme}></img>
        <p style={{fontWeight: 'bold'}}>Day {day}</p>
        <p className='separator'>-</p>
        <p>{theme}</p>
    </div>
  )
}

export default Artwork
