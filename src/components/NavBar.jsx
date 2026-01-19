import React from 'react'

export const NavBar = () => {
  return (
    <div className='p-4 py-6 bg-white rounded-full'>
        {/* navbar */}
        <div className='flex justify-between  '>
            {/* left */}
            <div>
                logo
            </div>

            {/* right */}
            <div className=''>
                <div className='flex'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
           
        </div>
   
    </div>
  )
}
