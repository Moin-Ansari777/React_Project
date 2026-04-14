// import React, { use, useEffect, useState } from 'react'

// const App = () => {
//   const [state, setState] = useState('');
//   const [isNumber,setIsNumber] = useState(false)
//   const [isCharacter,setIsCharacter] = useState(false);
//   const [passLen,setpassLen] = useState(8)


//   function generatePassword() {
//     if(isNumber === false && isCharacter === false) {setState(''); return '';}
//     const number = isNumber ? '1234567890' : '';
//     const Uppercase = isCharacter ? 'ABCDEFGHIJKLMNOPQURSTVWXYZabcdefghijklmnopqrstuvwxyz' : '';

//     const allChars = number + Uppercase;
//     let password = '';
//     password += Uppercase.charAt(Math.floor(Math.random() * Uppercase.length)) +
//       number.charAt(Math.floor(Math.random() * number.length))

//     while (password.length < passLen) {
//       password += allChars.charAt(Math.floor(Math.random() * allChars.length))
//     }
//     setState(password);
    
//   }
  
//  useEffect(()=>{
//   generatePassword()
//  },[isNumber,isCharacter,passLen])


//   return (
//     <div>
//       <div className='m-4'>
//         <h1 className='font-bold text-2xl'>Password Generator</h1>

//         <input className='border-2 rounded-xl p-1 text-lg'
//           type="text"
//           value={state}
//           readOnly /> <br />

//         <input type="range"
//           min='1'
//           max='18'
//           value={passLen}
//           onChange={(e)=>{setpassLen(e.target.value)}}
//         /><br />

//         <label htmlFor="number">
//           <input
//             type="checkbox"
//             id='number'
//             name='number'
//             value={isNumber}

//             onChange={(e)=>{setIsNumber(e.target.checked)}}
//           />Number
//         </label><br />

//         <label htmlFor="char">
//           <input
//             type="checkbox"
//             id='char'
//             value={isCharacter}
//             onChange={(e)=>{setIsCharacter(e.target.checked)}}
//           />Character
//         </label>

//         <button className='m-4 bg-gray-700 text-white p-2 rounded-xl'
//           onClick={generatePassword}

//         >Generate Password</button>
//         <button className='m-4 bg-gray-700 text-white p-2 rounded-xl'
//           onClick={()=>{
//             setIsCharacter(false);
//             setIsNumber(false)
//             setState('');
//             setpassLen(8)
//           }}

//         >Reset Password</button>
//       </div>
//       <h1 className='text-center text-4xl' >{state}</h1>
//     </div>
//   )
// }

// export default App
