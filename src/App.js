import './App.scss';
// import './App--dark.scss';
import Header from './component/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import JobList from './component/main/JobList';
import JobDetails from './component/main/JobDetails';
import SearchForm from './component/main/SearchForm';

function App() {
  return (
    <Router>
      <div className="App">
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
