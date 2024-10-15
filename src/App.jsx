
import { useState } from 'react'
import './App.css'
import {InputBox }from './Components'
import useCurrencyHook from './hooks/useCurrencyInfo'
function App() {
const [ amount, setAmount] = useState(0);
const [from , setFrom] = useState('usd');
const[ to, setTo]= useState('inr');
const[convertAmount, setConvertAmount]= useState(0);
const currencyInfo = useCurrencyHook(from);
const options =  Object.keys(currencyInfo);

const swap= ()=>{
setFrom(to);
setTo(from);
setConvertAmount(amount);
setAmount(convertAmount)}
 const Convert =()=>{
  setConvertAmount(amount * currencyInfo[to])
 }
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/finance.jpg')`,
        }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e)=> {e.preventDefault(); Convert();}}

            >
              <div className="w-full mb-1">
                <InputBox
                  label='From' amount={amount} currencyOptions={options} 
                  onAmountChange={amount=>setAmount(amount)}
                  onCurrencyChange={(currency)=> setAmount(amount)} selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md text-white px-2 py-0.5" 
                  style={{background: '#D08522'}}
                 onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label='To' amount={convertAmount} currencyOptions={options}
                  onCurrencyChange={(currency)=> setTo(currency)} selectCurrency={to}
                />
              </div>
              <button type="submit" className="w-full text-white px-4 py-3 rounded-lg" 
              style={{background: '#D08522'}}>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
