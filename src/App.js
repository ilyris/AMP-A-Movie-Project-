import React, {useState} from "react";
import "./App.css";
import Details from './components/Details';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TvShowPage from "./components/TvShowPage";
import Navigation from './components/Navigation';





const App = () => {

  const api_Key = process.env.REACT_APP_API_KEY;
  const baseURL = 'https://api.themoviedb.org/3/';

  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const fetchApiCall = async () => {
    const getResponse = await fetch(
      `${baseURL}search/movie?api_key=${api_Key}&query=${searchfield}`
    );
    const data = await getResponse.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const searchChange = event => setSearchField(event.target.value);

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      return fetchApiCall();
    }
  }

  const submitUsersRecipe = event => {
    event.preventDefault();
    fetchApiCall();
  };

  return (
    <Router>
    <div>
      <Navigation
          searchChange={searchChange}
          submitUsersRecipe={submitUsersRecipe}
          handleKeyPress={handleKeyPress}
        />
        <Switch>
          {/* Pass in properties to the home component so it can render out the movies when a user searches for a movie. */}
          <Route exact path ="/" render={ props => <Home {...props} movies={movies}/>} />
          {/*set up the second parameter as the id and the first one as movie since we would navigate to another page,
           it would take up that argument in the URL and render the detail component. */}
          <Route exact path="/movie/:id" component={Details} />
          <Route exact path ="/shows" component={TvShowPage} />
        {/* <Route exact path ="/movies" component={Movies} /> */}
        </Switch>
    </div>


    </Router>

  );
};


export default App;