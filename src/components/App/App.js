import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import FavouriteMovies from "../FavouriteMovies/FavouriteMovies";
import Navbar from "../Navbar/Navbar";
import Movie from "../Movie/Movie";
import NotFound from "../NotFound/NotFound";
import ScrollTop from "../elements/ScrollTop/ScrollTop";
import PersonInfo from "../PersonInfo/PersonInfo";
import alertify from "alertifyjs";
import {
  addLocalStorage,
  removeMovieFromStorage,
} from "../../Functions/StorageFunctions/storageFunctions";

class App extends Component {
  state = {
    favouriteMovies: [],
  };

  componentDidMount() {
    if (localStorage.getItem("favouriteMovies")) {
      // First Contact this App
      let movies = JSON.parse(localStorage.getItem("favouriteMovies"));
      this.setState({
        ...this.state,
        favouriteMovies: movies,
      });
    }
  }

  getFavouriteMovies = (favouritesMovie) => {
    const stateMovies = this.state.favouriteMovies;
    const addedMovie = stateMovies.find(
      (movie) => movie.id === favouritesMovie.id
    );
    if (!addedMovie) {
      this.setState({
        ...this.state,
        favouriteMovies: [...stateMovies, favouritesMovie],
      });
      addLocalStorage(favouritesMovie);
      alertify.success("Added to favorite movie", 2);
    } else {
      alertify.error(
        "The movie has already been added to your favorite movies",
        2
      );
    }
  };

  clearFavouriteMovie = (id) => {
    const filterMovie = this.state.favouriteMovies.filter(
      (movie) => movie.id !== id
    );
    this.setState({
      favouriteMovies: filterMovie,
    });
    alertify.success("This movie has been viewed and deleted.", 2);
    removeMovieFromStorage(id);
  };

  clearAllFavouriteMovies = () => {
    this.setState({
      favouriteMovies: [],
    });
    if (this.state.favouriteMovies.length) {
      alertify.success("All movies deleted!", 2);
    }

    localStorage.removeItem("favouriteMovies");
  };

  render() {
    const { favouriteMovies } = this.state;

    return (
      <Router>
        <ScrollTop>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/favourites"
                render={(props) => (
                  <FavouriteMovies
                    {...props}
                    favouriteMovies={favouriteMovies}
                    clearAllFavouriteMovies={this.clearAllFavouriteMovies}
                    clearFavouriteMovie={this.clearFavouriteMovie}
                  />
                )}
              />
              <Route
                exact
                path="/movie/:movieId"
                render={(props) => (
                  <Movie
                    {...props}
                    getFavouriteMovies={this.getFavouriteMovies}
                  />
                )}
              />
              <Route exact path="/person/:personId" component={PersonInfo} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </ScrollTop>
      </Router>
    );
  }
}
export default App;
