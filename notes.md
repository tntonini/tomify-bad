# Part 4: Adding Context

We will refactor some of our previous code, and use Context to hold some of our state instead of having it in the Sidebar.

## Display Playlist Name In Content Component

As stated at the end of part 3, we are going to display the name of the playlist that we've clicked on within the Content component. If we try to do that with our current player, we won't be able to, due to our playlist state being contained within Sidebar.

To fix this, we will "lift up" our state and use Context instead. This will allow _any component we choose_ to access state that we deem "globally accessible".

## Getting Started

First let's import createContext and set up a Provider that wraps our entire MusicPlayer.

- https://reactjs.org/docs/context.html (_Super confusing_)

All you need to know is that a Provider can accept a "value" prop. Whatever you pass to that prop, can be accessed by any component, as long as the component uses the `useContext` hook. We can even pass objects and functions...so that's exactly what we are going to do.

## We Need A Reducer

The object that we pass to the value prop in our Provider will have two properties:

- _state_

This property will look just like any JavaScript object you are used to. We will store useful info inside of this. This state object can contain as many properties as we want inside of it.

- _dispatch_

A function that we can use in any component that uses the `useContext` hook. This function allows us to "send messages" to our reducer in order to change the state.

## Our Reducer

Here's what we will start off with.

```
const DEFAULT_PLAYLIST = "home";

export const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(),
    favorites: new Set(),
  },
};

export default (state, action) => {
    return state
}
```

Let's import these into our index.js file, and pass them to our Provider. We also need to import the `useReducer` hook as well. After we pass the reducer and the initialState as arguments to `useReducer`, its as simple as passing an object like this to value:

```
{
    state,
    dispatch
}
```

## Refactoring Sidebar

Let's go back into Sidebar and remove the properties from state that we moved to Context. We should expect this to crash the app. We need to import the `useContext` hook AND the StoreContext that we created earlier. Inside our component it will look something like:

```
const { state, dispatch } = useContext(StoreContext);
```

There is a small problem though, this state variable will now cause a collision with the local variable called "state" in Sidebar. Let's comment out any functions that have anything to do with state to get a handle on things. We will hop back to this soon.

## Dispatching Actions

We are almost done, but still need to dispatch actions to the global store in order to manipulate state. Our actions are simply functions that contain an object describing what needs to be done.

```
{ type: 'ADD_PLAYLIST', playlist: 'My Playlist' } }
```

But how does the state update if our reducer doesn't know how to respond to the messages?

## Finishing The Reducer

All we need to do is add some basic logic to our reducer to handle two actions for now:

- Setting a current playlist
- Adding a playlist
- _We will delete a playlist at the beginning of next video_

Let's add a switch statement to our reducer that responds to what text is sent in the actions _type_ property. We will name our two cases:

- 'SET_PLAYLIST'
- 'ADD_PLAYLIST'

Each one of these cases will just perform a simple state update, and then we are done!

## Next Steps

We will implement the ability to remove a playlist at the beginning of the next video, and import some real audio files into the app so we can start displaying song data inside of our playlists.
