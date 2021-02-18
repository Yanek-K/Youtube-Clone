import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import RecommenedVideos from './components/RecommendedVideos'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
          <div className="app_page">
              <SideBar/>
              {/* <SearchPage/> */}
            </div>
          </Route>
          <Route path = '/'>
            <div className="app_page">
              <SideBar/>
              <RecommenedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
