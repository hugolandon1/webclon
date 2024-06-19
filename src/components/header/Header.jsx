'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import IconMarca from "../icons/IconMarca"
import DropdownLink from "../dropdown/DropdownLink"
import Image from "next/image"
/* import DropdownLink from "../dropdown/DropdownLink"; */





const Header = () => {

    const links = [
        {
            title: "Mujer",
            href: "/mujer",
            src: "https://i.ibb.co/b3VLf4K/Frame-68.png"
        },
        {
            title: "Hombre",
            href: "/hombre",
            
        },

        {
            title: "Patas",
            href: "/patas",
            
        },

        {
            title: 'About',
            href: '/about',
            
        },
        {
            title: 'Contact',
            href: '/contact',
            
        }
    ];

    const pathName = usePathname()

    return (
        <div>
            <nav className="h-24 flex">
                <div className="flex items-center bg-[#121212] pl-[30px]">
                    <Link href="/">
                        <IconMarca />
                    </Link>
                </div>
                <div className="w-full flex justify-end bg-[#121212]">
                    <div className="flex h-full items-center uppercase  list-none text-black gap-10 pr-[20vw]">
                        {links.map((link) => (
                            <Link className={`text-[12px] w-[100%] text-[#b6b6b6] hover:font-bold  ${pathName === link.href ? "font-bold text-white" : ""}` } href={link.href} key={link.title}>
                                {link.title} 
                            </Link>
                        ))}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header