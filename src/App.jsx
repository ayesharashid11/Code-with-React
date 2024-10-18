
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
          <Button />
        <div>
          <Card />
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
