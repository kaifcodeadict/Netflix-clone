import React from 'react'
import "./Rows.css";

const img_url = "https://www.themoviedb.org/t/p/original";


function Movie({islargeRow,movie,handleClick,}) {
    function truncateString(str, n) {
        return str?.length > n ? str.slice(0, n) + "..." : str;
      }

    return (
        <div className='movies' onClick={()=>handleClick(movie)}  >
            <img
              className={`row_poster ${islargeRow && "row_largeposter"}`}
              src={`${img_url}${
                islargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
              
              onClick={()=>handleClick(movie)}
              /> 
              <div className="dark-fade">
                  <h2 className="dark-title">{} {truncateString(movie?.name || movie?.title,28)}  </h2>
                   <h5 className="dark-descripiton"> {truncateString(movie?.overview,70)}</h5> 
                  <h5 className="dark-rating">IMDb: {movie?.vote_average}</h5>  
              </div>
        </div>
    )
}

export default Movie
