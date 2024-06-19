'use client'
import Link from 'next/link';
import { useState } from 'react';
import IconMarca from '../icons/IconMarca';


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
    <nav className="flex-col fixed z-10 left-0 top-0 w-full lg:items-center lg:hidden flex bg-black justify-between items-center py-4 px-4">
      <div className="flex items-center">
        <Link className="text-2xl text-white font-bold" href="/">
          <IconMarca />
        </Link>
      </div>
      <div className=" flex absolute left-2 bottom-[7px] lg:z-10 lg:left-0 lg:top-0 lg:bottom-[-50px] lg:flex lg:items-center  ">
        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-14 h-14 "
        >
          {showNav ? (
            <svg width="609" height="609" viewBox="0 0 609 609" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="506.672" width="716.541" height="144.717" transform="rotate(-45 0 506.672)" fill="#FCFCFC" />
              <rect x="102.332" y="0.00390625" width="716.541" height="144.717" transform="rotate(45 102.332 0.00390625)" fill="#FCFCFC" />
            </svg>



          ) : (
            <svg className="w-[70%] md:w-auto md:pb-[10px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="2" fill="#FCFCFC" />
              <rect x="3" y="11" width="18" height="2" fill="#FCFCFC" />
              <rect x="3" y="16" width="18" height="2" fill="#FCFCFC" />
            </svg>
          )}

        </button>

      </div>
      <div
        className={`lg:flex lg:items-center lg:justify-end lg:py-4 fixed bg-black w-[100%] h-[50%] top-0  ${showNav ? 'block' : 'hidden'
          } ${showNav ? 'lg:block' : 'lg:hidden'}`}
      >
        <ul className="flex flex-col justify-cente pt-14 items-center lg:flex-row lg:items-center lg:justify-end">
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