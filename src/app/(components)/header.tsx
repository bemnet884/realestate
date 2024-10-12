'use client'

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames'; // optional for better class handling
import Image from 'next/image';

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleNav = () => setNavOpen(prev => !prev);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      // Redirect or handle search logic here
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image src='/home.png' alt='logo' width={50} height={50} />
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700">
            Search
          </button>
        </form>

        {/* Navigation Menu */}
        <nav
          className={classNames('md:flex space-x-4 transition-all duration-300 ease-in-out', {
            hidden: !navOpen,
            block: navOpen,
          })}
        >
          <Link href="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Contact Info and User Account */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600">
            +1 (234) 567-890
          </a>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} aria-label="Toggle Navigation">
            {navOpen ? <FaTimes size={24} className="text-gray-700" /> : <FaBars size={24} className="text-gray-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
