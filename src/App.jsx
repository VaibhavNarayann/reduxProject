import React from 'react'
import { fetchPhotos, fetchVideos } from './server/mediaApi';

 const App = () => {
  return (
    <div className='h-screen text-white w-full bg-gray-950'>

      <button 
      className='bg-red-200 p-2 rounded-2xl mx-3'
      onClick={()=> {
        fetchPhotos("cat")
      }}
      >
        Get Img
      </button>

         <button 
      className='bg-green-100 p-2 rounded-2xl mx-3'
      onClick={ async ()=> {
       const data = await  fetchVideos("cat")
       console.log(data.videos())
      }}
      >
        Get videos
      </button>


    </div>
  )
}

export default App; 