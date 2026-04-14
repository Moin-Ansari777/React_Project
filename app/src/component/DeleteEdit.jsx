// import React from 'react'

// const DeleteEdit = ({ popup, setpopup,title,text }) => {
//     return (
//         <>
//             {popup &&
//                 <div>
//                     <button className='absolute top-4 right-4 p-2 bg-black' onClick={() => setpopup(false)}>❌</button>

//                     <div className='w-[75%] mt-24 m-auto p-8 text-center rounded-2xl shadow-blue-200 bg-blue-400'>
//                         <h1 className='text-4xl'>{title}</h1>
//                         <h2>{text}</h2>
//                         <div className='flex gap-3 mt-4 justify-center'>
//                             <button className='p-2 bg-green-500 rounded-2xl text-blue-300 border-2'>Yes</button>
//                             <button className='p-2 bg-red-500 rounded-2xl text-blue-300 border-2'>NO</button>
//                         </div>
//                     </div> </div>
//             }
//         </>
//     )
// }

//     export default DeleteEdit
// const [Data, setData] = useState(false)
//   const [Data1, setData1] = useState(false)

//   const checkAnyPopup = Data || Data1;
//   return (
//     <>
//       <div className='w-full h-screen flex justify-center items-center'>

//         {!checkAnyPopup &&
//           (
//             <div>
//               <button onClick={() => setData(prevData => prevData = true)} className='p-3 font-bold bg-red-500 rounded-xl'>Delete</button>
//               <button onClick={() => setData1(prevData => prevData = true)} className='p-3 font-bold bg-green-400 rounded-xl'>Edit</button>

//             </div>
//           )}
//         <DeleteEdit popup={Data} setpopup={setData} title='Delete' text='Are You Sure Want To Delete' />
//         <DeleteEdit popup={Data1} setpopup={setData1} title='Edit' text='Are You Sure Want To Edit' />

//       </div>
//     </>
//   )
// }