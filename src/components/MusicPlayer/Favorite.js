import React from 'react'

const Favorite = ({ isFavorite, songId, dispatch }) => {
  return (
    <>
      {isFavorite ? (
        <i
          className="fa fa-heart"
          onClick={() => dispatch({ type: 'REMOVE_FAVORITE', songId })}
        />
      ) : (
        <i
          className="fa fa-heart-o"
          onClick={() => dispatch({ type: 'ADD_FAVORITE', songId })}
        />
      )}
    </>
  )
}

export default Favorite
