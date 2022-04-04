# Javascript Challenge

## How to run

- Clone repo
- Install node modules with `--force` flag because some libs aren't updated to React v18.0
- Run with `npm run start`
- Open http://localhost:3000

## Built with
- [react](https://reactjs.org/)
- [redux](https://redux.js.org/), [reduxToolkit](https://redux-toolkit.js.org/)
- [react-router](https://reactrouter.com/)
- [react-map-gl](http://visgl.github.io/react-map-gl/)
- [react-vis](https://uber.github.io/react-vis/)
- [MUI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [CreateReactApp](https://create-react-app.dev/)

## Requirements
- [x] Fetch data from the [URL](https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/boat_ramps.geojson)
- [x] A map to be able to visualise all the boat ramps.
- [x] A data visualisation (e.g. a bar chart) of your choice that displays the number or ramps per construction material.
- [x] A data visualisation of your choice that displays the number of ramps per size category (values of `area` in 3 different ranges: `[0, 50)`, `[50, 200)`, and `[200, 526)`).
- [x] Zooming in the map should filter the visualised data to include only those ramps which are currently visible in the viewport.
- [x] Clicking on a data point on a visualisation should filter the ramps on the map to reflect the selected data.

## What I would do next
- Finding the centroid of the MultiPolygons
- Use Layer component to render markers
- Add unit tests
- Add path aliases
- Proper error handling (e.g. `Error Boundaries`, `try/catch` on requests)
- User feedback (e.g. loading/progress inicators, alerts)
- Boat Ramps page: enable/disable visualisations<->map data binding, filters reset, custom diagrams (created by user)
- Solve the problem with lazy loading of the `/boat_ramps` path
- Responsive layout
- Navigation Bar redesign
- Add Dockerfile and CI/CD
- etc.

## Notes
Approximate time spent: 12 hours

