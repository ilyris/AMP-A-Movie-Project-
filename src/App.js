import React from "react";
import "./App.css";
import Details from './components/Details';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Route exact path ="/" component={Home} />
      <Route exact path="/:id" component={Details} />
      {/* <Route exact path ="/shows" component={Tv_Shows} /> */}
      {/* <Route exact path ="/movies" component={Movies} /> */}

    </Router>

  );
};


export default App;
