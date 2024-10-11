// src/components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['/properties', '/about', '/services', '/blog', '/contact'].map((link) => (
              <li key={link}>
                <Link href={link} className="hover:text-blue-400 transition duration-200 ease-in-out">
                  {link.substring(1).charAt(0).toUpperCase() + link.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">123 Main Street, Anytown, USA</p>
          <p className="mb-2">Phone: +1 (234) 567-890</p>
          <p className="mb-2">
            Email: <Link href="mailto:info@realestate.com" className="hover:text-blue-400">info@realestate.com</Link>
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebook size={24} />, href: '#' },
              { icon: <FaTwitter size={24} />, href: '#' },
              { icon: <FaInstagram size={24} />, href: '#' },
              { icon: <FaLinkedin size={24} />, href: '#' },
            ].map((social, index) => (
              <Link key={index} href={social.href} className="hover:text-blue-400 transition duration-200 ease-in-out">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-2">Subscribe to receive the latest updates and offers.</p>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded mb-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved. |{' '}
        <Link href="/privacy" className="hover:text-blue-400 transition duration-200 ease-in-out">Privacy Policy</Link>{' '}
        |{' '}
        <Link href="/terms" className="hover:text-blue-400 transition duration-200 ease-in-out">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
