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
    <nav className="absolute z-10 left-0 top-0 w-full lg:hidden flex bg-black justify-between items-center py-4">
      <div className="flex items-center">
        <Link className="text-2xl text-white font-bold" href="/">
          Logo
        </Link>
      </div>
      <div className="">
        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-8 h-8"
        >
          <svg width="592" height="467" viewBox="0 0 592 467" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="591" height="466" stroke="white" />
            <rect x="84" y="97" width="425" height="70" fill="#FCFCFC" />
            <rect x="84" y="199" width="425" height="70" fill="#FCFCFC" />
            <rect x="84" y="301" width="425" height="70" fill="#FCFCFC" />
          </svg>

        </button>
      </div>
      <div
        className={`lg:flex lg:items-center lg:justify-end lg:py-4 ${showNav ? 'block' : 'hidden'
          } ${showNav ? 'lg:block' : 'lg:hidden'}`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-lg font-bold text-white " href={link.href}>
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