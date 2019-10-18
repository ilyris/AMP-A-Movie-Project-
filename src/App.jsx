import React, {useState} from "react";
import "./App.css";
import Details from './components/DetailsPage/Details';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {apiKey} from './config';
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
  let [pageNumber, setPageNumber] = useState(1);
  const [searchfield, setSearchField] = useState('');
  const [guestSessionID, setGuestSessionID] = useState('');


  const handlePagination = pageTransitionValue => {
    if( pageNumber === 1 && pageTransitionValue === "-") {
      console.log("page number stays 1 since were on the first page and hit the back button");
        setPageNumber(1);
        console.log(pageNumber);
    } else if(pageTransitionValue === "+") {
       setPageNumber(pageNumber + 1);
       console.log('page number was incremented by one since we clicked the next button');
       console.log(pageNumber);
    } else if(pageTransitionValue === "-") {
      console.log('page number decreased by one since we clicked the previous button');
      console.log(pageNumber);
       setPageNumber(pageNumber - 1);
    }
  }
  const fetchApiCall = async () => {
    const getResponse = await fetch(`${baseURL}search/movie?api_key=${apiKey}&query=${searchfield}&page=${pageNumber}`);
    const data = await getResponse.json();
    setMovies(data.results);
    console.log('The fetch api was called!');
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
  return (
    <Router>
    <ScrollToTop>
    <div>
      <Navigation
          searchChange={searchChange}
          handleOnClickSubmit={handleOnClickSubmit}
          handleSubmit={handleSubmit}
          guestSessionID={guestSessionID}
        />
        <MobileMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Pass in properties to the SearchPage component so it can render out the movies when a user searches for a movie. */}
          <Route exact path ="/search" render={ props => <SearchPage {...props} movies={movies} fetchApiCall={fetchApiCall} handlePagination={handlePagination} handleBackButton={handleBackButton} pageNumber={pageNumber} />}/>
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
    </Router>

  );
};


export default App;