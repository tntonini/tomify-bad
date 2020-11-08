/** @jsx jsx */
import React, { createContext, useEffect, useReducer, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import { initialState, reducer } from './reducers'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'

export const StoreContext = createContext(null)

const audioContext = new AudioContext()
const gainNode = audioContext.createGain()

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const audioRef = useRef()

  useEffect(() => {
    const source = audioContext.createMediaElementSource(audioRef.current)
    source.connect(gainNode).connect(audioContext.destination)
  }, [])

  useEffect(() => {
    if (state.playing) audioRef.current.play()
  }, [state.playing])

  useEffect(() => {
    gainNode.gain.setValueAtTime(state.volume, audioContext.currentTime)
  }, [state.volume])

  const song = state.media[state.currentSongId]

  const src =
    song && song.title ? `./media/${song.title} - ${song.artist}.mp3` : ''

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div css={CSS}>
        <Topbar />
        <Sidebar />
        <Content />
        <Playbar />

        <audio ref={audioRef} src={src} />
      </div>
    </StoreContext.Provider>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
