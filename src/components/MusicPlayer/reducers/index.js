import media from '../../../media.json'

const DEFAULT_PLAYLIST = 'home'

export const initialState = {
  media,
  currentPlaylist: DEFAULT_PLAYLIST,
  currentSongId: '',
  playing: false,
  playlists: {
    home: new Set(media.ids),
    favorites: new Set()
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
    case 'ADD_FAVORITE':
      state.playlists.favorites.add(action.songId)
      return { ...state }
    case 'PLAY':
      return {
        ...state,
        playing: true,
        currentSongId: action.songId || state.currentSongId
      }
    case 'PAUSE':
      return { ...state, playing: false }
    case 'REMOVE_FAVORITE':
      state.playlists.favorites.delete(action.songId)
      return { ...state }
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.playlist }
  }

  return state
}
