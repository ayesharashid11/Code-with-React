import React, { useCallback, useState, useEffect } from 'react'

const GenPass = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');
  const GenPass = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += "0123456789"
    if (characters) str += '+-=&*%$'
    for (let i = 0; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, characters])

  useEffect(() => {
    GenPass()
  }, [length, number, characters])
  return (
    <div className='bg-slate-800 min-h-screen '>
      <div className='bg-zinc-600 w-2/4 p-6 rounded-xl'>
        <h2 className='flex justify-center text-2xl text-pink-500'>Generate Password</h2>
        <div>
          <input type='text' className='w-9/12 p-3 m-3 rounded-xl' value={password} />
          <div className='flex  m-2'>
            <input className=' m-2' type='range' value={length}
              onChange={(e) => setLength(e.target.value)} min={8} max={20} />
            <p>Length: {length} </p>
            <input className=' m-2' type='checkbox'
              value={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }} />
            <label>Numbers</label>
            <input className=' m-2' type='checkbox' value={characters}
              id="numberInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenPass
