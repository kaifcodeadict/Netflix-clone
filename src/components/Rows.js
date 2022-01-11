import React, { useState, useEffect } from "react";
import  YouTube  from "react-youtube";
import movieTrailer from 'movie-trailer'
import Movie from "./Movie";
import axios from "../axios";
import "./Rows.css";


export default function Rows({ title, fetchUrl,islargeRow,setProgress}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailer] = useState('')

  useEffect(() => {
    async function fetchData() {
      setProgress(30)
      const request = await axios.get(fetchUrl);
      setProgress(50)
      setMovies(request.data.results);
      setProgress(100)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

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
      setProgress(100)
    }
    else{
      setProgress(30)
      movieTrailer(movie?.name?.replaceAll(' ','') || movie?.title || movie?.original_name)
      .then((url) =>{
      setProgress(50)
        const urlParams = new URLSearchParams(new URL(url).search)
      setProgress(70)
      setTrailer( urlParams.get('v'));
      setProgress(100)
      window.scrollBy(0, 200);
    })
      .catch((error) => console.log(error))
    }
  }

  let i = 0;

  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row_posters">
        {movies.map((movie,i) => {
          return (
            <div className="" key={i}>
            <Movie  islargeRow={islargeRow} movie={movie} handleClick = {handleClick}   />
            </div>
          );
        })}
      </div>
    {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}
