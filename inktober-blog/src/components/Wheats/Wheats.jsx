import { useState, useEffect } from 'react'
import './Wheats.css'

const images = Object.values(
  import.meta.glob('../../assets/images/deco/wheats/*.png', {
    eager: true,
    import: 'default',
  })
)

const WHEAT_WIDTH = 90 // Average wheat width (px)

function randomWheats(count) {
  return Array.from({ length: count }, () =>
    images[Math.floor(Math.random() * images.length)]
  )
}

function Wheats() {
  const [wheats, setWheats] = useState([])

  useEffect(() => {
    const count = Math.floor((window.innerWidth * 0.7) / WHEAT_WIDTH)
    setWheats(randomWheats(count))
  }, [])

  return (
    <div className="wheats">
      {wheats.map((src, i) => (
        <img key={i} src={src} alt="wheats" />
      ))}
    </div>
  )
}

export default Wheats