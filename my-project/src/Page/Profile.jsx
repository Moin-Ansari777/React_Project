import React from 'react';
import { User, Mail, Phone, MapPin, Package, CreditCard, Heart } from 'lucide-react';
import { userData } from '../../store/feature/productSlice';
import { NavLink } from 'react-router-dom';

const Profile = () => {

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar - Inspired by Myntra/Amazon Account Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-fit">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-3">
              <User size={40} />
            </div>
            <h2 className="font-bold text-gray-800">{userData.name}</h2>
            <p className="text-sm text-gray-500">@{userData.username}</p>
          </div>
          
          <nav className="space-y-2">
            <SidebarItem icon={<Package size={18}/>} label="Orders" to='/cart'/>
            <SidebarItem icon={<Heart size={18}/>} label="Cart" to='/cart'/>
            <SidebarItem icon={<CreditCard size={18}/>} label="Saved Cards" to='/profile'/>
            <SidebarItem icon={<User size={18}/>} label="Profile Info" active to='/profile'/>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Details</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard title="Full Name" value={userData.name} icon={<User className="text-blue-500" />} />
            <InfoCard title="Username" value={userData.username} icon={<User className="text-purple-500" />} />
            <InfoCard title="Email Address" value={userData.email} icon={<Mail className="text-red-500" />} />
            <InfoCard title="Phone Number" value={userData.phone} icon={<Phone className="text-green-500" />} />
          </div>

          <div className="mt-4">
            <InfoCard title="Primary Address" value={userData.address} icon={<MapPin className="text-orange-500" />} fullWidth />
          </div>

         
        </div>
      </div>
    </div>
  );
};

// Reusable Sub-Components

const SidebarItem = ({ icon, label, active = false ,to}) => (
  <NavLink to={to}
   className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
  >
    {icon} <span>{label}</span>
  </NavLink>
);


const InfoCard = ({ title, value, icon, fullWidth = false }) => (
  <div className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 ${fullWidth ? 'w-full' : ''}`}>
    <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
      <p className="text-gray-800 font-medium mt-1">{value}</p>
    </div>
  </div>
);

export default Profile;
