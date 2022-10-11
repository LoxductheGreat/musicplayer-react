import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faCirclePlay, faCirclePause, faForwardStep } from '@fortawesome/free-solid-svg-icons'

function PlayerControls (props) {
  return (
    <div className='player-controls'>
      <button className='skip-back-bttn' onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackwardStep} size='2xl' />
      </button>
      <button className='play-bttn' onClick={() => props.setisPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon={props.isPlaying ? faCirclePause : faCirclePlay} size='3x' />
      </button>
      <button className='skip-foward-bttn' onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForwardStep} size='2xl' />
      </button>
      {/* <div>
        <input type='range' min='0' max='100' value={props.volume} onChange={(e, v) => props.setVolume(v)} />
        <progress min='0' max='100' value={props.volume} />
      </div> */}
    </div>
  )
}

export default PlayerControls
