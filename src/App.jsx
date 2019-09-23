import React, {useState} from "react";
import "./App.css";
import Details from './components/DetailsPage/Details';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/HomePage/Home';
import Navigation from './components/Navigation/Navigation';
import MobileMenu from './components/MobileMenu/MobileMenu';
import SearchPage from './components/SearchPage/SearchPage';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';


const App = () => {
  
  const api_Key = process.env.REACT_APP_API_KEY;
  const baseURL = 'https://api.themoviedb.org/3/';

  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const fetchApiCall = async () => {
    const getResponse = await fetch(`${baseURL}search/movie?api_key=${api_Key}&query=${searchfield}`);
    const data = await getResponse.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const searchChange = event => setSearchField(event.target.value);

  const handleSubmit = event => {
    if(event.key === 'Enter') {
      return fetchApiCall();
    }
  }

  const handleOnClickSubmit = event =>  fetchApiCall();

  return (
    <Router>
    <div>
      <Navigation
          searchChange={searchChange}
          handleOnClickSubmit={handleOnClickSubmit}
          handleSubmit={handleSubmit}
        />
        <MobileMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Pass in properties to the SearchPage component so it can render out the movies when a user searches for a movie. */}
          <Route exact path ="/search" render={ props => <SearchPage {...props} movies={movies}/>} />
          {/* set up the second parameter as the id and the first one as movie since we would navigate to another page,
           it would take up that argument in the URL and render the detail component. */}
          <Route exact path="/movie/:id" component={Details} />
        {/* <Route exact path ="/movies" component={Movies} /> */}
           <Route exact path="/discover" component={DiscoverPage} />
        </Switch>
    </div>
    </Router>

  );
};


export default App;