import { useState } from 'react'
import './App.css'
import Folder from './components/Folder/Folder'
import Wheats from './components/Wheats/Wheats'

function App() {

  return (
    <>
    <h1>Inktober</h1>
    <h2>By Amonshage</h2>

    <Folder></Folder>

    <Wheats></Wheats>

    <footer>
      <p>© 2026 | All rights reserved</p>
    </footer>
    </>
  )
}

export default App
