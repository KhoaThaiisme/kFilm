import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { Error, Loader, FilmCard } from '../components';
// import { useGetMoviesListQuery } from '../redux/services/MovieDatabase';
// import { genres } from '../assets/constants';
// import { selectGenreListId } from '../redux/features/filmSlice';
// import { useGetMoviesListQuery } from '../redux/services/MovieDatabase';



const Discover = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a7243213d79e4344f8f16ce3b6098cf';
    const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9a7243213d79e4344f8f16ce3b6098cf';
 
    useEffect(() => {
        getMovies(FEATURED_API),
        getGenres(GENRES_API)
    }, []);
    
    const getGenres = (API) => {
        fetch(API)
            .then(res => res.json())
            .then((data) => {
                setGenres(data.genres);
                console.log(data.genres)
            })
    }

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                console.log(data.results);
            });
    };

    // if(isFetching) return <Loader type='Loading films...'/>;
    // if (error) return <Error />;

  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-black text-left ml-4'>Discover</h2>
            <select 
                value={genres}
                onChange={(e) => setMovies(e.target.value)}
                className='mt-4 ml-3'
            >
            {genres.length > 0 &&
            genres.map((genre) => <option key={genre.id} value={genre.genre_ids}>{genre.name}</option>)}
            </select>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {movies.length > 0 &&
          movies.map((movie) => <FilmCard key={movie.id} {...movie} />)}
        </div>
    </div>
  )
}

export default Discover