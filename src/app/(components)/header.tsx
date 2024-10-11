'use client'
// src/components/Header.jsx
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames'; // optional for better class handling

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(prev => !prev);

  return (
    <header className="flex justify-between w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          RealEstate
        </Link>

        {/* Navigation Menu */}
        <nav
          className={classNames('flex space-x-4', {
            hidden: !navOpen,
            block: navOpen,
            'md:flex': true,
          })}
        >
          <Link href="/properties" className="hover:text-blue-500">
            Properties
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About Us
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>

        {/* Contact Info and User Account */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="hover:text-blue-500">
            +1 (234) 567-890
          </a>
          <Link href="/login" className="hover:text-blue-500">
            Login
          </Link>
          <Link href="/register" className="hover:text-blue-500">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
