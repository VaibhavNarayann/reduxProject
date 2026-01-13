import  { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../server/mediaApi';
import {useDispatch, useSelector} from 'react-redux'; 


const ResultGrid = () => {
    const {query, activeTab, results, loading, error } = useSelector((state)=> state.search)

   useEffect(function(){
       const getData = async () =>  {
        let data ; 
        if(activeTab == 'photos') {
            const response = await fetchPhotos(query); 
            console.log(response.data)
        }
            if(activeTab == 'videos') {
            const response = await fetchVideos(query); 
            console.log(response.data); 
        }
        console.log(data); 
   }
    getData()
   }, [query,activeTab]); 


  return (
    <div>
     
    </div>          
  )
}


export default ResultGrid; 