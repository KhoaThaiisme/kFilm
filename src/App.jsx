import { Route, Routes } from 'react-router-dom';

import { SearchBar, SideBar } from './components';
import { Discover, FilmDetails } from './pages';

const App = () => {
  

  return (
    <div className='relative flex'>
      <SideBar/>
      <div>
        <SearchBar/>
        <div>
          <Routes>
            <Route path='/' element={<Discover />}/>
            <Route path='/films/:filmid' element={<FilmDetails/>}/>
            {/* <Route path='/search/:searchTerm' element={<Search />}/> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
