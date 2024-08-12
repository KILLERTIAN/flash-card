import React from 'react';
import { User } from 'lucide-react';
import Logo from '../assets/Logo.svg'; 

const Navbar = () => {
  return (
    <nav className="bg-[#0B0A0B] p-4 flex justify-between items-center">
      <div className="flex items-center">

        <img src={Logo} alt="Logo"  />
      </div>

      <div className="flex items-center">

        <User className="text-white h-6 w-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
