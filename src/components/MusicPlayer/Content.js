/** @jsx jsx */
import React, { useContext } from 'react'
import { css, jsx } from '@emotion/core'
import { StoreContext } from './index'

const Content = () => {
  const { state } = useContext(StoreContext)
  const songIds = state.media.ids

  return (
    <div className="Content" css={CSS}>
      {state.currentPlaylist}

      <table>
        <thead>
          <tr>
            <td> Title</td>
            <td>Artist</td>
            <td>Length</td>
          </tr>
        </thead>

        <tbody>
          {songIds.map(id => {
            const { title, artist, length } = state.media[id]

            return (
              <tr key={id}>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  height: calc(100% - 75px);
  padding: 20px;
  background: #121212;
  padding-top: 70px;
  text-transform: capitalize;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #282828;
  }
`

export default Content
