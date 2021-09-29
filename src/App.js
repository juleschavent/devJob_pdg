import './App.scss';

import Header from './component/header/Header';
import SearchForm from './component/main/SearchForm';
import JobList from './component/main/JobList';
import JobDetails from './component/main/JobDetails';
import JobCreate from './component/createCompany/JobCreate';
import JobUpdate from './component/updateCompany/JobUpdate';
import LegalNotice from './component/footer/LegalNotice';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react';
import ConstContextProvider from './component/context/ConstContext';
import { ThemeContext } from './component/context/ThemeContext'
import AuthProvider from './component/context/AuthContext';
import JobFooter from './component/main/JobFooter';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <AuthProvider>
        <ConstContextProvider>
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
              <Route path="/jobcreate">
                <JobCreate />
              </Route>
              <Route path="/jobupdate">
                <JobUpdate />
              </Route>
              <Route path="/LegalNotice">
                <LegalNotice />
              </Route>
            </Switch>
            <JobFooter />
          </div>
        </ConstContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
