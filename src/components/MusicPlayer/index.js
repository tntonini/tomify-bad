/** @jsx jsx */
import React, { createContext } from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'

export const StoreContext = createContext(null)

const MusicPlayer = () => (
  <StoreContext.Provider>
    <div css={CSS}>
      <Topbar />
      <Sidebar />
      <Content></Content>
      <Playbar></Playbar>
    </div>
  </StoreContext.Provider>
)

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
