/** @jsx jsx */
import React, { useContext } from 'react'
import { css, jsx } from '@emotion/core'
import { StoreContext } from './index'

const Playbar = () => {
  const { state, dispatch } = useContext(StoreContext)
  const song = state.media[state.currentSongId]

  const setVolume = e => {
    dispatch({ type: 'SET_VOLUME', volume: e.target.value })
  }

  return (
    <div className="Playbar" css={CSS}>
      <div>
        {song && (
          <>
            <div>{song.title}</div>

            <div style={{ fontSize: 14, color: '#999999', marginTop: 5 }}>
              {song.artist}
            </div>
          </>
        )}
      </div>

      <div
        className="play-pause-circle"
        onClick={() => {
          state.playing
            ? dispatch({ type: 'PAUSE' })
            : dispatch({ type: 'PLAY' })
        }}
      >
        <i className={`fa fa-${state.playing ? 'pause' : 'play'}`} />
      </div>

      <div>
        <i className={`fa fa-volume-${state.volume === 0 ? 'off' : 'up'}`} />

        <input
          type="range"
          min="0"
          max="1"
          value={state.volume}
          step="0.01"
          style={{ marginLeft: 10 }}
          onChange={setVolume}
        />
      </div>
    </div>
  )
}

const CSS = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: #282828;
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .play-pause-circle {
    width: 50px;
    height: 50px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .fa-play,
  .fa-volume-up,
  .fa-volume-off {
    font-size: 20px;
  }
`

export default Playbar
