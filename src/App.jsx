
import './App.css'
import InputBox from './Components/InputBox'

function App() {

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/finance.jpg')`,
        }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form

            >
              <div className="w-full mb-1">
                <InputBox
                  
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md text-white px-2 py-0.5" 
                  style={{background: '#D08522'}}
                 
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
              
                />
              </div>
              <button type="submit" className="w-full text-white px-4 py-3 rounded-lg" style={{background: '#D08522'}}>
                Convert 
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
