import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import RecommenedVideos from './components/RecommendedVideos'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        <SideBar />
        <RecommenedVideos />
      </div>
    </div>
  );
}

export default App;
