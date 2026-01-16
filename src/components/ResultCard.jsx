import React from 'react';


export const ResultCard = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-2xl min-w-full">
      <div className='p-0 m-0 hover:scale-105 transition-transform duration-200'>
         <img width={300} height={100} src={item.src}></img>
      </div>
    </div>
  );
};