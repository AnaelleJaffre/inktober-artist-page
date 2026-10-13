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

const MOVE = [
  { transform: 'rotateZ(0deg)' },
  { transform: 'rotateZ(12deg)' },
  { transform: 'rotateZ(0deg)' },
]

const move = (e) =>
  e.currentTarget.animate(MOVE, {
    duration: 600,
    easing: 'ease-out',
    composite: 'add',
  })

  return (
    <div className="wheats">
      {wheats.map((src, i) => (
        <img key={i} src={src} alt="wheats" onMouseEnter={move} style={{ animationDelay: `${Math.random() * -5}s` }}/>
      ))}
    </div>
  )
}

export default Wheats