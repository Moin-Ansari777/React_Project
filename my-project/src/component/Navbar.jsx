import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux"

const Navbar = () => {
    const cartLen = useSelector(state => state.product.cart)
    const totalItem = cartLen.reduce((total, item) =>
        (total + item.quantity), 0)
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', path: '/' }
        , { name: 'Products', path: '/products' }
        , { name: 'About Us', path: '/about' }
        , { name: 'Contact Us', path: '/contact' }]
    return (

        <nav className='sticky top-0 z-50 flex justify-between p-4 bg-white/30 backdrop-blur-md items-center text-gray-800 border-b border-white/20'>
            {/* Logo */}
            <div className="z-20">
                <h6 className="font-bold text-pink-600 text-xl">OK Orhan</h6>
            </div>

            {/* Desktop Menu Links - Hidden on mobile (hidden), flex on medium screens (md:flex) */}
            <div className='hidden md:flex gap-6 items-center'>
                {navLinks.map((item, index) => (
                    <Menu key={index} path={item.path} name={item.name} />
                ))}
            </div>

            {/* Search Bar - Hidden on mobile to save space */}
            <div className='hidden lg:flex items-center h-10'> {/* Added a fixed height to the container */}
                <span className='flex items-center justify-center border-2 border-r-0 h-full px-2 bg-gray-50'>
                    <FaSearch className='text-gray-400 text-lg' />
                </span>
                <input
                    type="text"
                    className='border-2 border-l-0 h-full px-3 outline-none w-64 text-sm'
                    placeholder='Search Product'
                />
            </div>


            {/* Icons & Hamburger Toggle */}
            <div className='flex gap-6 pr-4 items-center text-2xl z-20'>

                {/* Cart and Profile */}
                <NavLink
                    className={({ isActive }) =>
                        `relative p-2 rounded-2xl transition-all ${isActive ? 'bg-pink-400 text-white' : 'hover:bg-gray-100'}`
                    }
                    to={'/cart'}>

                    <IoCartOutline size={26} className="cursor-pointer hover:text-white font-bold" />

                    {totalItem > 0 && (
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                            {totalItem}
                        </span>
                    )}
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `relative p-2 rounded-2xl transition-all ${isActive ? 'bg-pink-400 text-white' : 'hover:bg-gray-100'}`
                    }
                    to={'/profile'}
                >

                    <CgProfile className="cursor-pointer hover:text-black" />
                </NavLink>


                {/* Mobile Menu Button */}
                <button className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {/* Mobile Dropdown Overlay */}
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-white p-6 gap-4 shadow-lg md:hidden z-10 border-t`}>
                {navLinks.map((item, index) => (
                    <Menu key={index} path={item.path} name={item.name} />
                ))}
                {/* Mobile Search Input */}
                <div className='flex mt-2'>
                    <input type="text" className='border-2 w-full p-2' placeholder='Search...' />
                </div>
            </div>
        </nav>
    );
};



const Menu = ({ path, name }) => {
    return (
        <NavLink
            className={({ isActive }) => (isActive ? 'text-pink-600' : '')} to={path}>{name}</NavLink>
    )
}

export default Navbar
