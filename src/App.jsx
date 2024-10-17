
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import USerProvider from './context/USerProvider'

function App() {
  
  return (
 <>
 <USerProvider>
 <h2 className='text-2xl text-emerald-700 flex justify-center' > 
 Getting Started Context Api </h2>
 <Login/>
 <Profile/>
 </USerProvider>
 
 </>
  )
}

export default App
