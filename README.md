# Movie Database App (Development)

## Project in production

<https://cassio-movie-database-app.herokuapp.com/>

## Project Description

Find your next movie or create your watchlist with this App. It include reviews, rating, actors and anything you need to know about the movie.

- This application will help users find their next movie to watch by showing helpful stats
- Resource needed for the project is movie api, examples include Imdb, MovieDB etc.

### User Stories

- [x] User can see all the popular movies on the front page
- [x] User can click on any of the movie to go to their own separate page
- [ ] User can then see all about the movie ratings, about, actors present on each separate movie page

### Useful links and resources

- [MovieDB Api](https://developers.themoviedb.org/3)

### Example projects

[Movie Database App w/ React by Oliver Gomes](http://phobic-heat.surge.sh/)  
[Movie Browser App w/ React&Redux&Bootstrap by Nataliia Pylypenko](https://api-cinema-10d15.firebaseapp.com/)

### To run this project as developer

You first need to get an API Key from Movie Database API, you are able to get it [here](https://developers.themoviedb.org/3/getting-started/introduction)

After you get v3 and v4 token keys you must create a .env file to the root project directory based on [.envexample](./.envexample) and fill it with your api keys.

- Install all dependencies: `yarn install`
- Run development server: `yarn dev`
- Build for production: `yarn build`
- Compiles to docker container: `yarn docker:build`
- Runs docker container at port 8080: `yarn docker:run`
- Lints and fixes files: `yarn lint`

#### Main Technologies

- VueJS
- Docker
- NGINX

#### Vue Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
