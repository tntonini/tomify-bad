import React from 'react'

const Play = ({ dispatch, playing, songId, isCurrentSong, visible }) => {
  if (isCurrentSong && playing) {
    return (
      <i
        className="fa fa-pause"
        onClick={() => dispatch({ type: 'PAUSE' })}
        style={{ visibility: visible ? 'visible' : 'hidden' }}
      />
    )
  } else {
    return (
      <i
        className="fa fa-play"
        onClick={() => dispatch({ type: 'PLAY', songId })}
        style={{ visibility: visible ? 'visible' : 'hidden' }}
      />
    )
  }
}

export default Play
