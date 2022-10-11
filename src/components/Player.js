import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player (props) {
  const trackAudio = useRef(null)
  const [isPlaying, setisPlaying] = useState(false)
  // const [volume, setVolume] = useState(50)

  useEffect(() => {
    if (isPlaying) {
      trackAudio.current.play()
      // trackAudio.current.volume = volume / 100
    } else {
      trackAudio.current.pause()
    }
  })

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setcurrentSongIdx(() => {
        let temp = props.currentSongIdx
        temp++

        if (temp > props.song.length - 1) {
          temp = 0
        }
        return temp
      })
    } else {
      props.setcurrentSongIdx(() => {
        let temp = props.currentSongIdx
        temp--

        if (temp < 0) {
          temp = props.song.length - 1
        }

        return temp
      })
    }
  }

  return (
    <div className='player'>
      <audio src={props.song[props.currentSongIdx].track} ref={trackAudio} />
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song[props.currentSongIdx]} />
      <PlayerControls isPlaying={isPlaying} setisPlaying={setisPlaying} SkipSong={SkipSong} /*volume={volume} setVolume={setVolume}*/ />
      <p className='song-que'>Next up: {props.song[props.nextSongIdx].name} by: {props.song[props.nextSongIdx].artist}</p>
    </div>
  )
}

export default Player
