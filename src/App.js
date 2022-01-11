import React, { useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Rows from './components/Rows'
import LoadingBar from 'react-top-loading-bar'

import requests from './requests'

function App() {
  const [progress,setProgress] = useState(0)

  const setTheprogress = (Comeprogress) =>{
    setProgress(Comeprogress)

  }
  return (
    <div className="App">
    <Navbar/>
    <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Banner setProgress={setTheprogress}/>
    <Rows title="Netflix Origanlas" setProgress={setTheprogress} fetchUrl={requests.netflixOriginals} islargeRow={true}/>
    <Rows title="Kids" setProgress={setTheprogress} fetchUrl={requests.kidsMovies} />
    <Rows title="Popular" setProgress={setTheprogress} fetchUrl={requests.popularMovies} />
    <Rows title="Romance" setProgress={setTheprogress} fetchUrl={requests.romanceMovies} />
    <Rows title="Comedy" setProgress={setTheprogress} fetchUrl={requests.comedyMovies} />
    <Rows title="Action" setProgress={setTheprogress} fetchUrl={requests.actionMovies} />
    <Rows title="Horror" setProgress={setTheprogress} fetchUrl={requests.horrorMovies} />
    <Rows title="From 2020" setProgress={setTheprogress} fetchUrl={requests.relaseFrom2020} />
    <Footer/>
    </div>
  );
}

export default App;
