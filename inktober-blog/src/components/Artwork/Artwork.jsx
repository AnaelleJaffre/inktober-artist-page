import './Artwork.css'

function Artwork({src, index, day, theme, onSelect}) {

  return (
  <div className='artwork' style={{'--i' : index}} onClick={onSelect}>
        <img className='artworkImage' src={src} alt={theme}></img>
        <p style={{fontWeight: 'bold'}}>Day {day}</p>
        <p className='separator'>-</p>
        <p>{theme}</p>
    </div>
  )
}

export default Artwork
