import React from 'react'
import useTheme from '../context/ThemeContext'

const Button = () => {
    const{themeMode, lightTheme, darkTheme}=useTheme()
    const handleTheme =()=>{
        if (themeMode === 'light') {
            darkTheme();
        } else {
            lightTheme();
        }
    }
  return (
    <div>
      <button className='p-3 dark:bg-fuchsia-700 dark:text-orange-400' 
      onClick={handleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Button
