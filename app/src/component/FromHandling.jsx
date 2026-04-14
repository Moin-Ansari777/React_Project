// import React, { Component, useRef, useState } from 'react'


// function App() {

//  const [gateway , setGateway] = useState({id: 'Credit Card' , info : 'Credit Card Selected'})
//   const arr = [
//     {id: 'Credit Card' , info : 'Credit Card Selected'},
//     {id : 'UPI', info : 'Online Gateway Open'},
//     {id : 'COD', info : 'Arrives At Home'},
//   ]
 
//  console.log(gateway)
//   return (
//     <>
//      {
//       arr.map((item,index)=>{
//         return (
//           <label key={index} htmlFor={item.id}>
//             <input 

//             type="radio"
//             value={item.id}
//             name='payment'
//             checked = {item.id === gateway.id}
//             id={item.id}
//             onChange={()=>setGateway(prev=>prev=item)}

//             />
//             {item.id}
//           </label>
//         )
//       })
//      }
//      <h1>{gateway.id}</h1>
//      <h1>{gateway.info}</h1>
//     </>
//   )
// }
// export default App
// import React, { useState } from 'react'

// const App = () => {

//   const [drop, setDrop] = useState('')
//   const arr = ['html', 'cs', 'css', 'ts', 'swing']
//  console.log(drop) 
//   return (
//     <div>
//       <select value={drop} onChange={(e) => {setDrop(e.target.value);}}>
//         <option value="">--Select--</option>
//         {arr.map(item => (
//             <option key={item} value={item}>{item}</option>
//         ))}
//       </select>

      
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// function App() {

//   const [data, setdata] = useState({ name: '', email: '', gender: 'female' })

//   function handleForm(e) {
//     const { name, value } = e.target;
//     setdata(prev => (
//       {
//         ...prev,
//         [name]: value
//       }
//     ))
//   }
//  const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload
//     console.log("Form Submitted:", data);
//     // You could add validation logic here
//   };
//   const gender = ['male', 'female', 'other']

//   return (
//     <div className='m-4 p-4 gap-2'>
//       <h1>form</h1>
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="uname">
//           <input
//             type="text"
//             value={data.name}
//             id='uname'
//             name='name'
//             placeholder='Enter Name'
//             onChange={handleForm}
//             required
//           /> Username
//         </label><br />

//         <label htmlFor="Email">
//           <input
//             type="email"
//             value={data.email}
//             id='Email'
//             name='email'
//             placeholder='Enter Email'
//             onChange={handleForm}
//             required
//           /> E-mail
//         </label><br />

//         <fieldset className="mt-4">
//           <legend>Gender</legend>
//           {gender.map((option) => (
//             <label key={option} className="mr-2">
//               <input
//                 type="radio"
//                 name='gender'
//                 value={option}
//                 checked={data.gender === option}
//                 onChange={handleForm}
//               />
//               {option.charAt(0).toUpperCase() + option.slice(1)}
//             </label>
//           ))}
//         </fieldset>
//         <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
//           Submit
//         </button>
//       </form>

//       <div className="mt-8 border-t pt-4">
//         <h3>Live Preview:</h3>
//         <p><strong>Name:</strong> {data.name}</p>
//         <p><strong>Email:</strong> {data.email}</p>
//         <p><strong>Gender:</strong> {data.gender}</p>
//       </div>


//     </div>
//   )
// }

// export default App
