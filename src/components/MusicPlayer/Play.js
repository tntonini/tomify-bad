import React from 'react'

const Play = ({ dispatch, playing, songId, isCurrentSong }) => {
  if (isCurrentSong && playing) {
    return (
      <i className="fa fa-pause" onClick={() => dispatch({ type: 'PAUSE' })} />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'PLAY', songId })}
      />
    )
  }
}

export default Play
