import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../server/mediaApi';
import {useDispatch, useSelector} from 'react-redux'; 


const ResultGrid = () => {
    const {query, activeTab, results, loading, error } = useSelector((store) => store.search)


   useEffect(function(){

       const getData = async () =>  {
        let data ; 
        if(activeTab == 'photos') {
            const data = await fetchPhotos(query); 
        }
            if(activeTab == 'videos') {
            const data = await fetchVideos(query); 
        }
        
        console.log(data); 
   }
    getData()
   }, [query,activeTab])




  return (
    <div>
     
    </div>          
  )
}


export default ResultGrid; 