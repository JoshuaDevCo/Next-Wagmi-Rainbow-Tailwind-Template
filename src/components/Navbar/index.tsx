
import React, { useState } from 'react';
import { BasicConnect } from "components/ConnectWallet";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 w-full ">
            <div>
              <Link href="/">
                <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <span className="font-bold">Logo</span>
                </a>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1 w-full justify-between">
              <div>
                <Link href="/about">
                  <a className="py-5 px-3 hover:underline">About</a>
                </Link>
                <Link href="/services">
                  <a className="py-5 px-3 hover:underline">Services</a>
                </Link>
                <Link href="/contact">
                  <a className="py-5 px-3 hover:underline">Contact</a>
                </Link>
              </div>
              <div>
                <BasicConnect />
              </div>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/about">
          <a className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        </Link>
        <Link href="/services">
          <a className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
        </Link>
        <Link href="/contact">
          <a className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
        </Link>
        <BasicConnect />
      </div>
    </nav>
  );
};

export default Navbar;
