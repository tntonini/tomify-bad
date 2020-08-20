# Part 5: Adding Media Files

The fun starts here.

## Go To Part 5 Repository Branch

Best way to get the files is via the repository and download as a ZIP file.

- https://github.com/DZuz14/react-spotify

### Media.json

Put this file in the src/ folder and import it into the initialState of the reducer.

### Audio Files

Put the entire media folder inside the dist/ folder.

## Content Component

Let's refactor Content to not have children first. Also update index.js file to have self closing tag.

### Map All Songs From JSON File

Let's see if we can start displaying our songs from the JSON file. Let's create a table, and produce a row for song we have.

### Refactor CSS

- Move CSS to be outside of component.
- Remove 20px font size.
- overflow y of scroll
