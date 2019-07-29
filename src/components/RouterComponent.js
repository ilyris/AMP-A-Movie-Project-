import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './Details';
import Home from './Home';


const RouterComponent = () => {
    return(
    <Router>
      <Route exact path ="/" component={Home} />
      <Route exact path="/:id" component={Details} />
      {/* <Route exact path ="/shows" component={Tv_Shows} /> */}
      {/* <Route exact path ="/movies" component={Movies} /> */}

    </Router>
    );
}

export default RouterComponent;