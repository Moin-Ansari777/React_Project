// import { useEffect, useState } from "react"
// import axios from 'axios';

// function App() {

//   const [data, setData] = useState([]);
//   const [userDetail, setUserDetail] = useState({ name: '', age: 0 })

//   async function getData() {
//     const response = await axios('https://698f19c5aded595c2533d6ab.mockapi.io/users')

//     setData(response.data)
//   }

//   async function postData() {
//     const response = await axios({
//       url: 'https://698f19c5aded595c2533d6ab.mockapi.io/users',
//       method: 'post',
//       data: {
//         name: userDetail.name,
//         age: userDetail.age
//       },
//       headers :{
//         'Content-Type': 'application/json'
//       },
//       onUploadProgress:(progress)=>{
//         console.log(progress)
//         console.log(progress.loaded/progress.total*100)
//       }
      
//     })
//     await getData()
//     setUserDetail(prev => (
//       { ...prev, name: '', age: 0 }
//     ))

//   }

//   function inputHandle(e) {
//     const { name, value } = e.target;
//     setUserDetail(prev => (
//       {
//         ...prev,
//         [name]: value
//       }
//     ))
//   }
//   const EditData = async () => {
//     const response = await axios({
//       url: `https://698f19c5aded595c2533d6ab.mockapi.io/users/${userDetail.id}`,
//       method: 'put',
//       data: userDetail
//     })
//     setUserDetail({ name: '', age: 0 })
//     await getData()
//   }

//   const DeleteUser = async (id) => {
//     const response = await axios({
//       url: `https://698f19c5aded595c2533d6ab.mockapi.io/users/${id}`,
//       method: 'delete'
//     })
//     await getData()
//   }

//   useEffect(() => {
//     axios.interceptors.request.use((config) => {
//       console.log(config.headers)
//       return config
//     })
//     getData()
//   }, [])

//   return (
//     <>
//       <div>
//         <button className="m-4 p-2 border-2 border-blue-300"
//           onClick={getData}>FETCH DATA</button><br />

//         <input
//           type="text"
//           name="name"
//           value={userDetail.name}
//           placeholder="Enter Name"
//           onChange={inputHandle}
//           className="border-2 bg-white p-1 m-2 rounded-xl"
//         />
//         <br />

//         <input
//           type="number"
//           name="age"
//           value={userDetail.age}
//           onChange={inputHandle}
//           placeholder="Enter age"
//           className="border-2 p-1 m-2 rounded-xl"
//         /> <br />

//         {userDetail.editMode ?
//           (<button className="m-4 p-2 border-2 border-blue-300"
//             onClick={EditData}>EDIT DATA</button>)
//           :
//           (<button className="m-4 p-2 border-2 border-blue-300"
//             onClick={postData}>POST DATA</button>)
//         }

//         <h1 className="m-2 p-2 text-xl">
//           {userDetail.name}
//         </h1>
//         <h1 className="m-2 p-2 text-xl">
//           {userDetail.age}
//         </h1>
//       </div>

//       <div>
//         {
//           data.map((item, index) => (
//             <div
//               className="p-4 m-2 rounded-xl bg-gray-500"
//               key={index}>
//               <p>{item.name}</p>
//               <p>{item.age}</p>
//               <p>{item.id}</p>
//               <button
//                 className="p-2 bg-white border-2 rounded-xl"
//                 onClick={() => { setUserDetail({ ...item, editMode: true }) }}
//               >Edit</button>
//               <button
//                 className="p-2 bg-white border-2 rounded-xl"
//                 onClick={() => { DeleteUser(item.id) }}
//               >Delete</button>
//             </div>
//           ))
//         }
//       </div>
//     </>
//   )
// }

// export default App