import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import RecommenedVideos from './components/RecommendedVideos'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import youtube from '../src/components/API/youtube'

function App() {

  const handleSubmit = async (inputSearch) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        key: 'AIzaSyCZK1pOt1UekRJZ3tZnOLihmgXiDYfDrTA'
    }
   })
  }

  return (
    <div className="App">
      <Router>
      <Header onFormSubmit={handleSubmit}/>
        <Switch>
          <Route path='/search/:searchTerm'>
          <div className="app_page">
              <SideBar/>
              <SearchPage/>
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
