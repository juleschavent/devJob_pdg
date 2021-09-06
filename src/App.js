import './App.scss';
// import './App--dark.scss';
import Header from './component/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import JobList from './component/main/JobList';
import JobDetails from './component/main/JobDetails';
import SearchForm from './component/main/SearchForm';

function App() {
  return (
    // Attention, bien diférencer les Compo des library react
    // Router, Switch, Route sont des library
    // Voir RESSOURCES/REACT/router.md
    <Router>
      <div className="App">
        {/* Header, SearchForm etc sont des composants */}
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchForm />
            <JobList />
          </Route>
          <Route path="/jobdetails/:id">
            <JobDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
