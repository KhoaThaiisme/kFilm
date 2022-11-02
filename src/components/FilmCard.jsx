import React from 'react'
import { useDispatch } from 'react-redux';

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';
const setVote = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) { 
    return 'orange';
  } else {
    return 'red';
  }
}

const FilmCard = ({title, poster_path, overview, vote_average, id}) => {
  return (
    <div className='flex flex-col w-[250px] p-4 animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group mb-10'>
        <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2240&q=80'} alt={title} />
      </div>
      <div className='mt-20'>
        <h3 className='text-[1.5rem] font-bold'>{title}</h3>
        <span className={`text-${setVote(vote_average)}-500 font-bold`}>{vote_average} <i className="fad fa-stars"></i></span>
      </div>
      <div>
        <h2 className='font-semibold'>Overview:</h2>
        <p>{overview}</p>
      </div>

    </div> 
  )
}

export default FilmCard