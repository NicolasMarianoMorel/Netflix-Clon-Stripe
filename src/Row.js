import React, { useEffect, useState } from 'react';
import axios from './axios.js';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css"

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(null)
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    
    const handleTrailer = (movie) => {
      if(trailerUrl) {
        setTrailerUrl("")
      } else {
        movieTrailer(movie?.name || "").then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }).catch(() => alert("There's no trailer available.") )
      }
    }

    const opts = {
      height: "390",
      width: "100%",
      playerVar: {
        autoplay: 1
      }
    }
    
  return (
   <div className='row'>
       <h2>{title}</h2>

    <div className='row__posters'>
       {movies.map(
         (movie) => 
         ((isLargeRow && movie.poster_path) ||
         (!isLargeRow && movie.backdrop_path)) && (
           <div className='row_posters-relative'>
           <img
           onClick={() => handleTrailer(movie)}
           className={`row__poster ${isLargeRow && "row__posterLarge"}`}
           key={movie.id} 
           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
          <p className='row__poster-name'>{movie.name || movie.original_title || movie.original_name}</p>
           </div>
           )
       )}   
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
  );
}

export default Row;
