import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

export const SearchBar = () => {
  const [text, setText] = useState(''); 
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault(); 
    console.log(text);
      dispatch(setQuery(text));
    setText('');
  };

  return (
    <div className='mt-10 flex justify-center w-full'>
        <div className='shadow-white-100'>

          <div className=' min-w-3xl'>
           <form  className='p-2 text-xl  bg-blue-200 text-black rounded-2xl items-center text-center'
      onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input
         className='outline-0 p-3 w-full text-2xl font-thin '
         value={text}
         onChange={(e)=> {
        setText(e.target.value); 
         }}
         type="text"
          placeholder='Seach anything...'
           />
        <button className='p-3 bg-blue-100 rounded-3xl hover:bg-amber-50 transition ease-in w-full'>Search</button>
      </form>
      </div>
    </div>
    </div>
  )
}
