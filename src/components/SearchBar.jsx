import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilmCard from './FilmCard';



const SearchBar = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([])

  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=9a7243213d79e4344f8f16ce3b6098cf&query='

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm) 
        .then((res) => res.json())
        .then((data) => {setMovies(data.results)})
    }
    setSearchTerm('');
    navigate(`/search/${searchTerm}`)
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="search" 
          className='w-full h-[3rem] ml-2 p-2 border-hidden hover:border-solid'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {movies.length > 0 &&
          movies.map((movie) => <FilmCard key={movie.id} {...movie} />)}
        </div>
    </div>
  )
}

export default SearchBar