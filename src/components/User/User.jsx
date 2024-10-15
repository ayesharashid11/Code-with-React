import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='flex items-center justify-center'>
      <img src='https://blush.design/api/download?shareUri=jO5huXwLeImwaik3&c=New%2520Palette%25201_0%7Effffff&bg=ffffff&w=800&h=800&fm=png'
       className='h-80'/> <p className='text-2xl text-orange-700'>user: {id}</p>
    </div>
  )
}

export default User
