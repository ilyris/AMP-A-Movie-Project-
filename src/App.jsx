import React, {useState, useEffect, useCallback} from "react";
import "./App.css";
import Details from './components/DetailsPage/Details';
import {Route, Switch} from 'react-router-dom';
import {apiKey} from './config';
import history from './history';
import axios from "axios";


import Home from './components/HomePage/Home';
import GuestProfile from './components/Profiles/GuestProfile';
import Navigation from './components/Navigation/Navigation';
import MobileMenu from './components/MobileMenu/MobileMenu';
import SearchPage from './components/SearchPage/SearchPage';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import Footer from './components/Footer/Footer';
import UserLogin from "./components/UserLogin/UserLogin";
import ScrollToTop from './ScrollToTop';
import PersonPage from './components/PersonPage/PersonPage';


const App = () => {


  const baseURL = 'https://api.themoviedb.org/3/';
  const [movies, setMovies] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [searchQuery, setSearchQuery] = useState('');
  const [guestSessionID, setGuestSessionID] = useState('');


  const handlePagination =  async (newPageNumber, query) => {
    if( newPageNumber < 1) return;
    const {results, total_pages} = await fetchApiCall(query, newPageNumber);
    if(newPageNumber > total_pages) return;

    setMovies(results);
    history.push(`/search/${newPageNumber}`, query);
  }

  const fetchApiCall =  useCallback(async (searchQuery, pageNumber = 1) => {
    const getResponse = await fetch(`${baseURL}search/movie?api_key=${apiKey}&query=${searchQuery}&page=${pageNumber}`);
    const data = await getResponse.json();
    return data;
    
  }, []);

  const onSubmit =  async (query) => {
    const {results} = await fetchApiCall(query);
    setMovies(results);
    history.push('/search/1', query );
  }

  const handleBackButton = event => {
    return window.history.back();
  }

  const createGuestSession = () => {
    axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`)
    .then((response) => {
        setGuestSessionID(response.data.guest_session_id);
    })
    .catch(( error) => {
        console.log(error);
    });
}
  const handleLogOut = () => {
    return setGuestSessionID('');
  }

  // useEffect( () => {
  //   (async function() {
  //     const searchedMovies = await fetchApiCall();
  //     console.log(searchedMovies);
  //     setMovies(searchedMovies);
  //   })();
  // },[pageNumber, fetchApiCall]);

  return (
    <>
    <ScrollToTop>
    <div>
      <Navigation
          guestSessionID={guestSessionID}
          onSubmit={onSubmit}
        />
        <MobileMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Pass in properties to the SearchPage component so it can render out the movies when a user searches for a movie. */}
          <Route exact path ="/search/:id" render={ props => <SearchPage {...props} movies={movies} handlePagination={handlePagination} handleBackButton={handleBackButton} />}/>
          {/* set up the second parameter as the id and the first one as movie since we would navigate to another page,
           it would take up that argument in the URL and render the detail component. */}
          <Route exact path="/details/movie/:id" render={props => <Details {...props} movieId={movies.id} baseUrl={baseURL} handleBackButton={handleBackButton} />} />
          <Route exact path="/discover" render={ props => <DiscoverPage {...props} handleBackButton={handleBackButton} />}/>
          <Route exact path="/login" render={props => <UserLogin {...props} createGuestSession={createGuestSession}  guestSessionID={guestSessionID}/> } />
          <Route exact path="/profile/guest" render={props => <GuestProfile {...props} username={"Guest"} handleLogOut={handleLogOut}/> } />
          <Route exact path ="/details/cast/:id" render={props => <PersonPage {...props}  /> } />

        </Switch>
        <Footer/>
    </div>
    </ScrollToTop>
    </>

  );
};


export default App;