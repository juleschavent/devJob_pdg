import './App.scss';

import Header from './component/header/Header';
import SearchForm from './component/main/SearchForm';
import JobList from './component/main/JobList';
import JobDetails from './component/main/JobDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react';
import ConstContextProvider from './component/context/ConstContext';
import { ThemeContext } from './component/context/ThemeContext'
import AuthProvider from './component/context/AuthContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
      <ConstContextProvider>
        <Router>
          <div className={theme ? "App App--light" : "App App--dark"}>
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
      </ConstContextProvider>
    </AuthProvider>
  );
}

export default App;
