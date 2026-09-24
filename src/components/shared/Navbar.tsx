import Image from 'next/image';
import React from 'react';
import Logo from "@/app/assets/logo.png"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=' sticky top-0 '>
            <div className="bg-slate-200">
        <nav className=" container mx-auto flex justify-between items-center py-4">
          <Image
            src={Logo}
            alt='logo' 
            className='w-13'
          ></Image>
          <ul className="flex items-center gap-2 space-x-4 ">
              <li className='font-semibold hover:text-blue-500 text-black'><Link href="/">Home</Link></li>
              <li className='font-semibold hover:text-blue-500 text-black'><Link href="/apps">Apps</Link></li>
              <li className='font-semibold hover:text-blue-500 text-black'><Link href='instaillation'>Installation</Link></li>
          </ul>
          
          <button className="btn btn-success">Contribute</button>

        </nav>
      </div>
        </div>
    );
};

export default Navbar;