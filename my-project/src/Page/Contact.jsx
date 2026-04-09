import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaGithub, FaGitAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                
                {/* Left: Contact Form */}
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-pink-800 mb-2">Get in Touch</h2>
                    <p className="text-gray-500 mb-8">We'd love to hear from you. I am always here to chat.</p>
                    
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                <input type="text" placeholder="Moin" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                <input type="text" placeholder="Ansari" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                            <input type="email" placeholder="okorhan786@gmail.com" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                            <textarea rows="4" placeholder="Leave us a message..." className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
                        </div>
                        <button className="w-full bg-black hover:bg-blue-700 text-pink-500 font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all active:scale-95">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right: Info & Socials */}
                <div className="bg-black p-8 md:p-12 text-pink-500 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="p-3 bg-pink-500 text-white rounded-lg text-xl"><FaPhoneAlt /></span>
                                <div>
                                    <p className="text-blue-100 text-sm">Call us</p>
                                    <p className="font-semibold">+91 8535013309</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="p-3 bg-pink-500 text-white rounded-lg text-xl"><FaEnvelope /></span>
                                <div>
                                    <p className="text-blue-100 text-sm">Email us</p>
                                    <p className="font-semibold">okorhan786@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="p-3 bg-pink-500 text-white rounded-lg text-xl"><FaMapMarkerAlt /></span>
                                <div>
                                    <p className="text-blue-100 text-sm">Visit us</p>
                                    <p className="font-semibold">Muzaffarnagar, Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-12">
                        <p className="text-blue-100 mb-4 font-medium">Follow our socials</p>
                        <div className="flex flex-wrap gap-4 text-2xl">
                            <a href="#" className="hover:text-blue-200 transition-colors" title="LinkedIn"><FaLinkedin /></a>
                            <a href="#" className="hover:text-blue-200 transition-colors" title="Twitter"><FaTwitter /></a>
                            <a href="#" className="hover:text-blue-200 transition-colors" title="Facebook"><FaFacebook /></a>
                            <a href="#" className="hover:text-blue-200 transition-colors" title="WhatsApp"><FaWhatsapp /></a>
                            <a href="#" className="hover:text-blue-200 transition-colors" title="Git"><FaGitAlt /></a>
                            <a href="#" className="hover:text-blue-200 transition-colors" title="GitHub"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact

