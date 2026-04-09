import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-black text-white py-16 px-6 md-px-12'>
            {/* logo */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12'>

                <div className='lg:col-span-1'>
                    <h1 className='text-3xl font-extrabold tracking-tighter text-pink-500 mb-2'>OK</h1>
                    <p className='text-gray-400 text-sm leading-relaxed'>Solomon Company</p>
                </div>

                <div>
                    <h4 className='font-bold mb-4 uppercase text-xs tracking-widest text-gray-500'>Support</h4>
                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer transition'>Weekly Themes</li>
                        <li className='hover:text-white cursor-pointer transition'>Pre-Sales Faqs</li>
                        <li className='hover:text-white cursor-pointer transition'>Submit A Ticket</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-4 uppercase text-xs tracking-widest text-gray-500'>Services</h4>
                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer transition'>Services</li>
                        <li className='hover:text-white cursor-pointer transition'>Theme Tweaks</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-4 uppercase text-xs tracking-widest text-gray-500'>Community</h4>
                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer transition'>Showcase</li>
                        <li className='hover:text-white cursor-pointer transition'>WidgetTweaks</li>
                        <li className='hover:text-white cursor-pointer transition'>Support</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-4 uppercase text-xs tracking-widest text-gray-500'>Company</h4>
                    <ul className='space-y-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer transition'>About Us</li>
                        <li className='hover:text-white cursor-pointer transition'>Contact Us</li>
                        <li className='hover:text-white cursor-pointer transition'>Affiliate</li>
                    </ul>
                </div>
            </div>

<div className='max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-sm text-blue-400 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p>© 2026 Orhan Company. All rights reserved.</p>
        <div className='flex gap-6'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </div>
    </div>


        </footer>
    )
}

export default Footer
