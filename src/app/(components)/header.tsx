'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames'; // optional for better class handling

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(prev => !prev);

  return (
    <header >
      <div>
        <div>
          {/* Logo */}
          <Link href="/">
            RealEstate
          </Link>
        </div>

        <div>
          {/* Navigation Menu */}
          <nav
            className={classNames('flex space-x-4', {
              hidden: !navOpen,
              block: navOpen,
              'md:flex': true,
            })}
          >
            <Link href="/properties" >
              Properties
            </Link>
            <Link href="/about" >
              About Us
            </Link>
            <Link href="/services" >
              Services
            </Link>
            <Link href="/blog" >
              Blog
            </Link>
            <Link href="/contact" >
              Contact
            </Link>
          </nav></div>



        {/* Contact Info and User Account */}
        <div>
          <a href="tel:+1234567890" >
            +1 (234) 567-890
          </a>
          <Link href="/login" >
            Login
          </Link>
          <Link href="/register" >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div >
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
