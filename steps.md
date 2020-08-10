# Create playlist

1. A modal should appear, with a form that allows us to enter a playlist name and submit.
2. Submitting the form adds a new key to `playlists object` with a value of `new Set()`.
   Make sure to change current null values to be Set's as well.
3. A toast should appear once that finishes, letting us know that the playlist has been created.

## Modal

A. Create a basic Modal component in MusicPlayer that accepts children and has some base styling.

- The modal will include:
  - A semi transparent black overlay.
  - A section for children content to be displayed within.
  - An `open` and `close` prop. `open` will determine if it renders, and `close` will be a callback function to run when we are closing the modal.

B. Next we will create the form for the modal inside of Sidebar itself, passing it as children to the Modal component.

C. We need to add a `modal` property to the current state, and set it as false by default. We can then set `open` to be `state.modal` and set `close` to be a function that just sets `modal: false`.

D. Add click handler to new playlist <li> and have it set `modal: true`.

E. Make sure input field is required, then create a new playlist upon submittal. We need to add an onSubmit handler to execute a addPlaylist function where we prevent default, and then create the new playlist. Input needs to have a ref!

## Toast

A toast should appear only if we've successfully added a playlist. Closing out of the modal should do nothing.

A. Create toast with basic styling. It needs children and to have some animation done via CSS.
B. Explain animation and keyframes.
C. Have the Toast close out after a default amount of time.
D. Needs to utilize useEffect and set a timeout to close itself.
E. Will have two props, `toast` and `close`.
F. Toast will close itself after x amount of seconds. Perhaps give a default prop and allow for custom closeout time.
