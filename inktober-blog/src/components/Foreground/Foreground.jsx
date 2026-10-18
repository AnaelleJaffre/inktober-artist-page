import { useEffect, useState } from 'react'
import './Foreground.css'

function Foreground({src, day, theme, onClose}) {

    useEffect(() => {
        // "Escape" key shortcut
        const onKey = (event) => event.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

  return (
  <div className='foreground' onClick={onClose}>
        <figure onClick={(event) => event.stopPropagation()}>
            <img src={src} alt={theme}></img>
            <figcaption>Day {day} | {theme}</figcaption>
        </figure>
    </div>
  )
}

export default Foreground
