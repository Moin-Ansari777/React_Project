import { useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import EmployeePopUp from './Component/popup/EmployeePopUp'
import DeletePopup from './Component/popup/DeletePopup'
import { fetchData } from './store/feature/empolyee/employeeThunk'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  })
  return (
    <>
      <EmployeePopUp />
      <DeletePopup />
      
      <div className='flex flex-col min-h-screen w-full'>

        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </>
  )
}

export default App
