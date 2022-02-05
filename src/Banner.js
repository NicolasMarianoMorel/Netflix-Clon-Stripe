import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from './axios.js';
import requests from './Requests.js';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        return request;
        }
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    const handleTrailer = () => {
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


  return <header className='banner' style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
  }}>
     <div className='banner__contents'>
         <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
         <div className='banner__buttons'>
             <button onClick={() => handleTrailer()}
              className='banner__button'>Play</button>
             <button className='banner__button'>My List</button>
         </div>
         <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
    </div> 

    <div className='banner--fadebottom'></div>
    <div className='trailer'> 
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  </header>
  ;
}

export default Banner;
