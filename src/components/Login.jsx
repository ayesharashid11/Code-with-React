import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'
const Login = () => {
    const [username, setUsername] =useState('')
    const [ password, setPassword] = useState('')
    const {setUser} = useContext(userContext)
    const handleSubmit = (e) =>{
e.preventDefault()
setUser({username, password})
    }
  return (
    <div>
   <input type='text'   value={username} placeholder='Enter Username'
   onChange={(e)=> setUsername(e.target.value)}/>
   <input type='password'   value={password} placeholder='Enter Password'
   onChange={(e)=> setPassword(e.target.value)}/>
   <button onClick={handleSubmit}> Login</button>
    </div>
  )
}

export default Login
