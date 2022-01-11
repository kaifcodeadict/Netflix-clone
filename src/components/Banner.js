import React, { useState, useEffect } from "react";
import axios from "../axios";
import  YouTube  from "react-youtube";
import movieTrailer from 'movie-trailer'
import requests from "../requests";
import "./Banner.css"
const img_url = "https://www.themoviedb.org/t/p/original";

export default function Banner({setProgress}) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl,setTrailer] = useState('')


 

  useEffect(() => {
    async function fetchData() {
      setProgress(30)
      const request = await axios.get(requests.popularMovies);
      setProgress(50)
      let Allmovies = request.data.results;
      setMovie(Allmovies[Math.floor(Math.random() * Allmovies.length - 1)]);
      setProgress(100)
      return request;
    }
    fetchData();
  }, []);


  function truncateString(str, n) {
    return str?.length > n ? str.slice(0, n) + "..." : str;
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailer('')
    }
    else{
      setProgress(30)

      movieTrailer(movie?.name?.replaceAll(' ','') || movie?.title || movie?.original_name)
      .then((url) =>{ 
      setProgress(70)
        const urlParams = new URLSearchParams(new URL(url).search)
      setTrailer( urlParams.get('v'));
      setProgress(100)
      window.scrollBy(0, 300);

      })
      .catch((error) => console.log(error))
    }
  }

  return (
      <>
    <header
      className="banner"
      style={{
          backgroundSize: "cover",
          backgroundImage:  `url("${img_url}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
    >
      <div className="banner_contents">
      
      <h1 className="banner_title" >{movie?.title || movie?.name || movie?.original_name}</h1>
      
      <div className="banner_buttons">
      <button onClick={()=> handleClick(movie)} className="banner_btn">Play</button>
      <button className="banner_btn">My List</button>
      </div>

      <h1 className="banner_description" >
          {truncateString(movie?.overview,150)}
          </h1>

      </div>
      <div className="banner-fade"></div>
    </header>

    {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}

      </>
  );
}
