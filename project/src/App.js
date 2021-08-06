//module
import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';
//components
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

import styles from './styles/module/Cast.module.css';
//styles
import './styles/base.scss';

const Home = lazy(() =>
  import('./pages/Home.jsx' /* webpackChunkName:"howe-pages" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.jsx' /* webpackChunkName:"MoviesPage-pages" */),
);
const MoviesDetailPage = lazy(() =>
  import(
    './pages/MoviesDetailPage.jsx' /*webpackChunkName:"MoviesDetailPage-pages" */
  ),
);

export default function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Suspense fallback={<h1 className={styles.load}>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.moviesDetails} component={MoviesDetailPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
        </Switch>
      </Suspense>
      <Redirect to={routes.home} />
    </React.Fragment>
  );
}
// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <React.Fragment>
//         <AppBar />
//         <Suspense fallback={<h1 className={styles.load}>Loading...</h1>}>
//           <Switch>
//             <Route exact path={routes.home} component={Home} />
//             <Route path={routes.moviesDetails} component={MoviesDetailPage} />
//             <Route exact path={routes.movies} component={MoviesPage} />
//           </Switch>
//         </Suspense>
//         <Redirect to={routes.home} />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
