import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Education from './pages/Education/Education';
import SocialIssues from './pages/SocialIssues/SocialIssues';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [pageTitle, setPageTitle] = useState("Головна сторінка");
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact render={() => <Home pageTitle={pageTitle} />} />
          <Route path="/education" render={() => <Education pageTitle={pageTitle} />} />
          <Route path="/social-issues" render={() => <SocialIssues pageTitle={pageTitle} />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
