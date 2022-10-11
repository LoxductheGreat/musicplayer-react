import React from 'react'

function PlayerDetails (props) {
  return (
    <div className='player-details'>
      <div className='details-img'>
        <img src={props.song.img} alt='song image' />
      </div>
      <p className='song-name'>{props.song.name}</p>
      <p className='song-artist'>{props.song.artist}</p>
    </div>
  )
}

export default PlayerDetails
