import './App.css'
import { useState, useEffect } from 'react'
import Player from './components/Player'

function App () {
  const [song] = useState([
    {
      name: 'Pay For You ft. G-Eazy',
      artist: 'Skizzy Mars',
      img: './images/payforyou.png',
      track: './tracks/skizzymars-pay-for-you.mp3'
    },
    {
      name: 'Tara',
      artist: 'Skizzy Mars',
      img: './images/tara.png',
      track: './tracks/skizzymars-tara.mp3'
    },
    {
      name: 'How I Feel',
      artist: 'Lucas Coly',
      img: './images/howifeel.png',
      track: './tracks/lucascoly-how-i-feel.mp3'
    },
    {
      name: 'Like They Say',
      artist: 'Lucas Coly',
      img: './images/liketheysay.png',
      track: './tracks/lucascoly-like-they-say.mp3'
    }
  ])

  const [currentSongIdx, setcurrentSongIdx] = useState(0)
  const [nextSongIdx, setnextSongIdx] = useState(currentSongIdx + 1)

  useEffect(() => {
    setnextSongIdx(() => {
      if (currentSongIdx + 1 > song.length - 1) {
        return 0
      } else {
        return currentSongIdx + 1
      }
    })
  }, [currentSongIdx])

  return (
    <div className='App'>
      <Player currentSongIdx={currentSongIdx} setcurrentSongIdx={setcurrentSongIdx} nextSongIdx={nextSongIdx} song={song} />
    </div>
  )
}

export default App
