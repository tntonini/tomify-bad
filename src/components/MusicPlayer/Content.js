/** @jsx jsx */
import React, { useContext, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { StoreContext } from './index'

import Favorite from './Favorite'
import Play from './Play'

const Content = () => {
  const { state, dispatch } = useContext(StoreContext)
  const [playVisibleId, setPlayVisibleId] = useState(false)
  const currentPlaylist = state.currentPlaylist
  const songIds = Array.from(state.playlists[currentPlaylist])

  return (
    <div className="Content" css={CSS}>
      <div className="playlist-title">{currentPlaylist}</div>

      {songIds.length <= 0 ? (
        <p style={{ marginTop: 10 }}>
          Your playlist is empty. Start by adding some songs!
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <td />
              <td>Title</td>
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>

          <tbody>
            {songIds.map(id => {
              const { title, artist, length } = state.media[id]
              const isFavorite = state.playlists.favorites.has(id)

              return (
                <tr key={id}>
                  <td
                    onMouseEnter={() => setPlayVisibleId(id)}
                    onMouseLeave={() => setPlayVisibleId('')}
                    style={{ width: 75, paddingLeft: 5 }}
                  >
                    {playVisibleId === id && (
                      <Play
                        dispatch={dispatch}
                        playing={state.playing}
                        songId={id}
                        isCurrentSong={state.currentSongId === id}
                      />
                    )}

                    <span style={{ marginRight: 10 }} />

                    <Favorite
                      isFavorite={isFavorite}
                      songId={id}
                      dispatch={dispatch}
                    />
                  </td>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
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

  .playlist-title {
    font-size: 20px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 15px;
    font-size: initial;
  }

  table tr:not(:last-of-type) {
    border-bottom: 1px solid #282828;
  }

  table td {
    padding: 10px 0;
  }

  i {
    cursor: pointer;
  }
`

export default Content
