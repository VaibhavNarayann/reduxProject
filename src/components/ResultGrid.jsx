import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../server/mediaApi';
import {useDispatch, useSelector} from 'react-redux'; 
import { setError, setLoading, setResults } from '../redux/features/searchSlice';
import { ResultCard } from './ResultCard';

 const ResultGrid = () => {
    const {query, activeTab, results, loading, error } = useSelector((store) => store.search); 
    const dispatch = useDispatch(); 

   useEffect(function(){
        if(!query) return 

       const getData = async () =>  {
        try { 
            dispatch(setLoading()); 
        let data = [] ; 
        if(activeTab == 'photos') {
         let  response = await fetchPhotos(query); 
         data = response.results.map((item)=>({
            id: item.id, 
            type: 'photo', 
            title: item.alt_description, 
            thumbnail: item.urls.small, 
            src:  item.urls.full, 
            url: item.links.html
         }))
        }
            if(activeTab == 'videos') {
            let response = await fetchVideos(query); 
            data = response.videos.map((item)=>({
                id: item.id, 
                type: 'video', 
                title: item.user.name || 'video', 
                thumbnail: item.image,
                src: item.video_files[0].link,
                url: item.url
            }))
          }
        console.log(data); 
        dispatch(setResults(data));

        } catch (err) {
            dispatch(setError(err)); 
        }
   }  
    getData(); 
   }, [query, activeTab]); 

   if(error) return <h1>Error</h1>
   if(loading) return <h1>Loading...</h1> 


 return (
  <div className="flex justify-center mt-10">
    <div className="grid grid-cols-3  gap-0">
      {results.map((item, idx) => (
        <div key={idx} className="rounded-sm border bg-white  m-0">
          <ResultCard item={item} />
        </div>
      ))}
    </div>
  </div>
);
}


export default ResultGrid; 