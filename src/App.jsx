import React from 'react'
import { fetchPhotos, fetchVideos } from './server/mediaApi';
import { SearchBar } from './components/SearchBar';

 const App = () => {
  return (
    <div className='h-screen text-white w-full bg-gray-950 flex justify-center'>
      <SearchBar/>
    </div>
  )
}

export default App; 














{/* <div>
      <button 
        className='bg-red-200 p-2 rounded-2xl mx-3'
        onClick={ async ()=> {
        const data = await fetchPhotos("dog"); 
        console.log(data  );
        }}
        >
          Get Img
        </button>

          <button 
          className='bg-green-100 p-2 rounded-2xl mx-3'
          onClick={ async ()=> {
          const data = await  fetchVideos("cat"); 
          console.log(data.videos[2]); 
        }}
        >
          Get videos
        </button>
   </div> */}