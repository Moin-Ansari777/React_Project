import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className="flex flex-row p-2 justify-around bg-blue-300 text-white">
                <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/contact">Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/about">About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/help">Help</NavLink>
            </div>
            {arr.map(item =>
            (
                <NavLink to={`/contact/:${item}`}>{item}</NavLink>
            )
            )}
        </div>

    )
}

export default Navbar
