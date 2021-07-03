//module
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
//components
import Home from './pages/Home';
import MoviesDetailPage from './pages/MoviesDetailPage';
// import Navigation from './components/Navigation/Navigation';
import MoviesPage from './pages/MoviesPage';
import AppBar from './components/AppBar/AppBar';

import routes from './routes';
//styles
import './styles/base.scss';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AppBar />
        {/* <Navigation /> */}
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.moviesDetails} component={MoviesDetailPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
        </Switch>

        <Redirect to={routes.home} />
      </React.Fragment>
    );
  }
}

export default App;
