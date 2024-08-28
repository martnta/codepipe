"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/app/ActiveSection';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useActiveSection();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href={'/'} className='text-purple-400 font-bold' >CodePipe</Link>
{       /*     <Image src="/logo.png" alt="CodePipe Logo" width={120} height={32} />*/}
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                      activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.toLowerCase()
                    ? 'bg-gray-800 text-cyan-400'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}