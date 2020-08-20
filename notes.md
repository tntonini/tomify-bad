# Part 5: Adding Media Files

The fun starts here.

## Go To Part 5 Repository Branch

Best way to get the files is via the repository and download as a ZIP file.

- https://github.com/DZuz14/react-spotify

### Media.json

Put this file in the src/ folder and import it into the initialState of the reducer. Make sure to put media.ids as an initial argument.

### Audio Files

Put the entire media folder inside the dist/ folder.

## Content Component

Let's refactor Content to not have children first. Also update index.js file to have self closing tag.

### Map All Songs From JSON File

See if we can start displaying our songs from the JSON file. Let's create a table, and produce a row for each song we have. We need to convert the Set to an array to map through it. We also want to show some help text if we found no songs in the playlist.
