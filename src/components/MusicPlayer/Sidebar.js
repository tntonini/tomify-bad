/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../../img/spotify-white.png'

/**
 * @function Sidebar
 */
const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playlists: {
      home: null,
      favorites: null
    }
  })

  const playlists = Object.keys(state.playlists)

  return (
    <ul className="Sidebar" css={CSS}>
      <img src={logo} />

      <li className="library">Library</li>

      {playlists.map(list => (
        <li
          key={list}
          className={list === state.currentPlaylist ? 'active' : ''}
          onClick={() => {
            setState({ ...state, currentPlaylist: list })
          }}
        >
          {list}
        </li>
      ))}

      <li className="new-playlist">
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>
    </ul>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding-top: 20px;

  img {
    height: 60px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  li.active {
    border-left: 2px solid white;
    padding-left: 18px;
  }

  li.library {
    cursor: unset;
    color: gray;
    text-transform: uppercase;
    font-weight: normal;
  }

  li.new-playlist {
    position: absolute;
    bottom: 80px;

    i {
      margin-right: 5px;
      transform: translateY(1px);

      &:before {
        font-size: 20px;
      }
    }

    span {
      color: gray;
      font-weight: 300;
    }
  }
`

export default Sidebar
