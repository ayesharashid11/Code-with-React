import React from 'react'

const GenPass = () => {
  return (
    <div className='bg-slate-800 min-h-screen '>
     <div className='bg-zinc-600 w-2/4 p-6 rounded-xl'>
        <h2 className='flex justify-center text-2xl text-pink-500'>Generate Password</h2>
        <div>
            <input type='text' className='w-9/12 p-3 m-3 rounded-xl'/>
            <div className='flex  m-2'>
            <input  className=' m-2' type='range' /> 
            <input className=' m-2' type='checkbox' /><label>Numbers</label>
            <input  className=' m-2'type='checkbox' /><label>Characters</label>
            </div>
        </div>
     </div>
    </div>
  )
}

export default GenPass
