import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

export const SearchBar = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault()
      dispatch(setQuery(text))
    setText('')
  }

  return (
    <div className='mt-30   flex justify-center '>
      <div className='w-full'>
           <form  className='p-2 text-xl  bg-yellow-600 text-black rounded-2xl items-center text-center'
      onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input
         className='outline-0 p-3'
         value={text}
         onChange={(e)=> {
          setText(e.target.value)
         }}
         type="text"
          placeholder='Seach anything...'
           />
        <button className='p-3 bg-blue-100 rounded-full'>Search</button>
      </form>
      </div>
    </div>
  )
}
