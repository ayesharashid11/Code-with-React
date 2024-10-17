import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Profile = () => {
    const{user} = useContext(userContext);
    if(!user) return <div>Please Log In</div>
  return (
    <div>
      Profile
<p>{user.username}</p>
    </div>
  )
}

export default Profile
