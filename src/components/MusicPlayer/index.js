/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'

const MusicPlayer = () => (
  <div css={CSS}>
    <Topbar />
    <Sidebar />
    <Content></Content>
    <Playbar></Playbar>
  </div>
)

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
