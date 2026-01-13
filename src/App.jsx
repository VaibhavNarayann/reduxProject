import React from 'react'
import { fetchPhotos, fetchVideos } from './server/mediaApi';
import { SearchBar } from './components/SearchBar';
import  Tabs  from './components/Tabs';
import ResultGrid from './components/ResultGrid';

 const App = () => {
  return (
    <div className='h-screen  w-full  flex justify-center'>
      <div className='text-center '>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      </div>
    </div>
  )
}

export default App; 














