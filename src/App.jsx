import React, {useState} from "react";
import "./App.css";
import Details from './components/DetailsPage/Details';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/HomePage/Home';
import Navigation from './components/Navigation/Navigation';
import MobileMenu from './components/MobileMenu/MobileMenu';
import SearchPage from './components/SearchPage/SearchPage';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import PeoplePage from './components/PeoplePage/PeoplePage';
import Footer from './components/Footer/Footer';


const App = () => {
  
  const api_Key = process.env.REACT_APP_API_KEY;
  const baseURL = 'https://api.themoviedb.org/3/';

  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchfield, setSearchField] = useState('');

  const handlePagination = pageTransitionValue => {
    if( pageNumber === 1 && pageTransitionValue === "-") {
        setPageNumber(1);
    } else if(pageTransitionValue === "+") {
       setPageNumber(pageNumber + 1);
    } else if(pageTransitionValue === "-") {
       setPageNumber(pageNumber - 1);
    }
}
  const fetchApiCall = async () => {
    const getResponse = await fetch(`${baseURL}search/movie?api_key=${api_Key}&query=${searchfield}&page=${pageNumber}`);
    const data = await getResponse.json();
    setMovies(data.results);
  };


  const searchChange = event => setSearchField(event.target.value);

  const handleSubmit = event => {
    if(event.key === 'Enter') {
       fetchApiCall();
       if(pageNumber > 1) {
        setPageNumber(1);
      }
    }
  }
  const handleOnClickSubmit = event =>  {
    if(pageNumber !== 1) {
      setPageNumber(1);
    }
    fetchApiCall();
  }

  const handleBackButton = event => {
    return window.history.back();
  }
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
          <Route exact path ="/search" render={ props => <SearchPage {...props} movies={movies} fetchApiCall={fetchApiCall} handlePagination={handlePagination} handleBackButton={handleBackButton} />}/>
          {/* set up the second parameter as the id and the first one as movie since we would navigate to another page,
           it would take up that argument in the URL and render the detail component. */}
          <Route exact path="/details/movie/:id" render={props => <Details {...props} api_Key={api_Key} movieId={movies.id} baseUrl={baseURL} handleBackButton={handleBackButton} />} />
        {/* <Route exact path ="/movies" component={Movies} /> */}
          <Route exact path="/discover" component={DiscoverPage} />

          <Route exact path="/people" component={PeoplePage} />
        </Switch>
        <Footer/>
    </div>
    </Router>

  );
};


export default App;