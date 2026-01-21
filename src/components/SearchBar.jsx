import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
export const SearchBar = () => {
  const [text, setText] = useState(''); 
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault(); 
      dispatch(setQuery(text));
    setText('');
  };

  return (
    <div className='mt-30 flex justify-center '>
        <div className='shadow-white-100'>
          <div className='lg:min-w-3xl md:min-w-2xl '>
           <form  className='p-2 text-xl  bg-[#0000005b] text-black rounded-2xl items-center text-center'
      onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input
         className='outline-0 p-3 w-full md:text-3xl  font-thin text-white'
         value={text}
         onChange={(e)=> {
        setText(e.target.value); 
         }}
         type="text"
          placeholder='Seach anything...'
           />
           <div className='p-3'>
                <button className="
              p-3
              bg-black 
              text-white 
              rounded-3xl 
              w-full
              transition 
              duration-300 
              ease-in-out 
              hover:bg-gradient-to-r 
              hover:from-purple-500 
              hover:to-pink-500 
              hover:shadow-lg 
              hover:scale-102
            ">
              Search
            </button>
           </div>
      </form>
      </div>
    </div>
    </div>
  )
}
