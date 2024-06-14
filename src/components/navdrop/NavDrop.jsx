'use client'
import Link from 'next/link';
import { useState } from 'react';


const links = [
    {
        title: "home grotesk",
        href: "/",
        /* img: "https://i.ibb.co/mG3mbQL/Frame-55-2.png" */

    },
    {
        title: "mujer",
        href: "/mujer",
        /* img: "https://i.ibb.co/r0kRyF5/Frame-56-1.png" */


    },

    {
        title: "hombre",
        href: "/hombre",
        /* img: "https://i.ibb.co/Nr6wvWN/Frame-57-1.png" */

    },

    {
        title: 'patas',
        href: '/patas',
        /* img: "https://i.ibb.co/tccK8fZ/b.png" */
    },
    {
        title: 'about',
        href: '/about',
        /* img: "https://i.ibb.co/RY63275/f.png" */
    },
    {
        title: 'contact',
        href: '/contact',
        /* img: "https://i.ibb.co/4t26C9g/n.png" */
    },
    {
        title: 'carpenter',
        href: '/contact',
        /* img: "https://i.ibb.co/17cMrT5/k.png" */
    },
    {
        title: 'curia',
        href: '/contact',
        /* img: "https://i.ibb.co/09tz29z/l.png" */
    },
    {
        title: 'ffflauta',
        href: '/contact',
        /* img: "https://i.ibb.co/nPNpKtk/w.png" */
    },
    {
        title: 'trovador',
        href: '/contact',
        /* img: "https://i.ibb.co/TMhctwd/s.png" */
    },
    {
        title: 'xer0',
        href: '/contact',
        /* img: "https://i.ibb.co/HFFf9zx/x.png" */
    },
];



const NavDrop = () => {
    const [showNav, setShowNav] = useState(false);
  
    const handleToggle = () => {
      setShowNav(!showNav);
    };
  
    return (
      <nav className="lg:hidden flex bg-slate-400 justify-between items-center py-4">
        <div className="flex items-center">
          <Link className="text-2xl font-bold" href="/">
            Logo
          </Link>
        </div>
        <div className="">
          <button
            onClick={handleToggle}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff" />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:justify-end lg:py-4 ${
            showNav ? 'block' : 'hidden'
          } ${showNav ? 'lg:block' : 'lg:hidden'}`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
            {links.map((link, index) => (
              <li key={index}>
                <Link className="text-lg font-bold" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavDrop;