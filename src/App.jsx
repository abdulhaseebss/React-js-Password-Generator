import React, { useEffect, useState } from 'react'

export const App = () => {
    const [password , setPassword] = useState('')
    const [length , setLength] = useState(8)
    const [numbers , setNumbers] = useState(false)
    const [symbol , setSymbol] = useState(false)
    const [lowercase , setLowercase] = useState(false)
    const [uppercase , setUppercase] = useState(false)
    const [checkBox , setcheckBox] = useState(true)
  
  
    useEffect(()=>{
      generatPassword()
    } , [numbers , symbol , length , lowercase  , uppercase])
  
    
    function includeNumber(e) {
      setNumbers(e.target.checked);
    }
    function includeSymbol(e) {
      setSymbol(e.target.checked);
    }
    function includeLowercase(e) {
      setLowercase(e.target.checked);
    }
    function includeUppercase(e) {
      setUppercase(e.target.checked);
    }
  
    function copyText() {
      navigator.clipboard.writeText(password)
      alert('Text Copied')
    }
  
    function generatPassword() {
      if (!numbers && !symbol && !lowercase && !uppercase) {
        setUppercase('enabled');
  
        return;
      }
      let pass = ''
      let str = ''
      if (numbers) {
        str += '0123456789'
      }
      if (symbol) {
        str += '/*-+{}[]=_()&^%$#@!~`?><,.;'
      }
      if (lowercase) {
        str += 'abcdefghijklmnopqrstuvwxyz'
      }
      if (uppercase) {
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
      for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * str.length);
        let char = str.charAt(randomNumber);
        pass += char;
      }
      setPassword(pass);
    }
  
    return (
      <>
      <div className='flex items-center w-[100%] h-[60rem] relative flex-wrap'>
      <div className='w-[100%]'>
      
        <h1 className=' text-2xl font-semibold text-center mt-4'>Password Generator</h1><br />
        <div className=' flex justify-center'>
        <div className=' border-[2px] w-[35%] flex justify-center gap-[2rem] p-5 mb-8 rounded-md'>
        <h2 className=' text-2xl font-semibold w-[65%]'>{password}  </h2>
        <div><button onClick={copyText}><i className="fa-regular fa-copy text-[30px] ml-5"></i></button>
        <button onClick={generatPassword}><i className="fa-solid fa-arrows-rotate text-[30px] ml-4"></i></button></div><br /></div></div>
        <div className=' text-center'><label htmlFor="lenght" className='mr-[10px] border-[1px] border-[#b0b0b0c9] px-[20px] py-[3px] shadow-inner rounded-md text-[18px] font-bold '>{length}</label>
        <input type="range" id="length" min={1} max={20} onChange={(e) => setLength(e.target.value)} value={length} /></div>
        <div className=' mt-5 text-center'>
            <label htmlFor="numbers" className='mr-[10px] text-[20px] font-semibold  p-[5px]'>Number</label>
            <input type="checkbox" id="number" onChange={includeNumber} />
        </div>
        <div className=' text-center'>
            <label htmlFor="symbol" className='mr-[10px] text-[20px] font-semibold p-[5px]'>Symbols</label>
            <input type="checkbox" id="symbol" onChange={includeSymbol} />
        </div>
        <div className=' text-center'>
            <label htmlFor="lowercase" className='mr-[10px] text-[20px] font-semibold p-[5px]'>Lowercase</label>
            <input type="checkbox" id="lowercase" onChange={includeLowercase} />
        </div>
        <div className=' text-center'>
            <label htmlFor="uppercase" className='mr-[10px] text-[20px] font-semibold p-[5px] '>Uppercase</label>
            <input type="checkbox" id="uppercase" checked={uppercase} onChange={includeUppercase} />
        <h1 className='mt-[30rem] font-semibold text-2xl p-5'>Developed by <a href='https://github.com/abdulhaseebss' target='null' className=' text-blue-700'>Abdul Haseeb</a></h1>
        </div>
        </div>
        </div>
      </>
  )
}

export default App

