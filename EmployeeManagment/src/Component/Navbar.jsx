import React from 'react'
import Layout from './Layout'
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import { useDispatch } from 'react-redux';

import { openEmployeePopup } from '../store/feature/popup/popup'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const dispatch = useDispatch()
  const handlePlus = () => {
    dispatch(openEmployeePopup())
  }

  return (
    <div className='sticky top-0 z-10'>
      <Layout>
        <div className="navbar bg-base-100 shadow-sm">

          <div className="navbar-start">
            <NavLink to={'/employee'}><p className="btn btn-ghost text-xl">Employee Managment</p></NavLink>
          </div>
          <div className="navbar-end">

            <button
              onClick={handlePlus}
              className="btn btn-ghost btn-circle">
              <FaPlus />
            </button>

            {/* HighLight element */}
            <NavLink to={'/highlight'}>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator text-xl">
                  <FaRegHeart />
                </div>
              </button>
            </NavLink>


          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Navbar
