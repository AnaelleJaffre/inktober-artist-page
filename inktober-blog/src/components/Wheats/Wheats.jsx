import { useState, useEffect } from 'react'
import './Wheats.css'
import wheatSound from '../../assets/sound/wheats.mp3'

// Images import
const images = Object.values(
  import.meta.glob('../../assets/images/deco/wheats/*.png', {
    eager: true,
    import: 'default',
  })
)

// Sound parametrisation
const wheatHoverSound = new Audio(wheatSound)
wheatHoverSound.volume = 0.1
const COOLDOWN = 400 // ms
let lastPlay = 0

// Movement
const MOVE = [
  { transform: 'rotateZ(0deg)' },
  { transform: 'rotateZ(12deg)' },
  { transform: 'rotateZ(0deg)' },
]

const move = (e) => {
  e.currentTarget.animate(MOVE, {
    duration: 600,
    easing: 'ease-out',
    composite: 'add',
  })
  const now = performance.now()
  if (now - lastPlay < COOLDOWN) return
  lastPlay = now

  const sound = new Audio(wheatSound)
  sound.volume = 0.1
  sound.play()
}

// Wheats disposition
function randomWheats(count) {
  return Array.from({ length: count }, () => ({
    src: images[Math.floor(Math.random() * images.length)],
    left: Math.random() * 100,
    delay: Math.random() * -5,
    height: 60 + Math.random() * 100,
  }))
}

function Wheats() {
  const [wheats, setWheats] = useState([])

  useEffect(() => {
    const count = Math.max(0, Math.floor(window.innerWidth/40))
    setWheats(randomWheats(count))
  }, [])

  return (
    <div className="wheats">
      {wheats.map((w, i) => (
      <img
        key={i}
        src={w.src}
        alt="wheats"
        onMouseEnter={move}
        style={{ left: `${w.left}%`,
          animationDelay: `${w.delay}s`,
          height:`${w.height}px`,
          bottom: 0}}
      />
      ))}
    </div>
  )
}

export default Wheats