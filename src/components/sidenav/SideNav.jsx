import DropdownLink from "../dropdown/DropdownLink"
import Esto from "../esto/Esto"

const links = [
    {
        title: "home grotesk",
        href: "/",
        /* img: "https://i.ibb.co/mG3mbQL/Frame-55-2.png" */
        img: "https://i.ibb.co/3T3Vm07/yyey3333-1.png"
    },
    {
        title: "mujer",
        href: "/mujer",
        /* img: "https://i.ibb.co/r0kRyF5/Frame-56-1.png" */
        img: "https://i.ibb.co/xJ2qJbs/4543ttere-1.png"

    },

    {
        title: "hombre",
        href: "/hombre",
        /* img: "https://i.ibb.co/Nr6wvWN/Frame-57-1.png" */
        img: "https://i.ibb.co/3Ctq06D/52twtwwt-1.png"
    },

    {
        title: 'patas',
        href: '/patas',
        /* img: "https://i.ibb.co/tccK8fZ/b.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'about',
        href: '/about',
        /* img: "https://i.ibb.co/RY63275/f.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'contact',
        href: '/contact',
        /* img: "https://i.ibb.co/4t26C9g/n.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'carpenter',
        href: '/contact',
        /* img: "https://i.ibb.co/17cMrT5/k.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'curia',
        href: '/contact',
        /* img: "https://i.ibb.co/09tz29z/l.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'ffflauta',
        href: '/contact',
        /* img: "https://i.ibb.co/nPNpKtk/w.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'trovador',
        href: '/contact',
        /* img: "https://i.ibb.co/TMhctwd/s.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
    {
        title: 'xer0',
        href: '/contact',
        /* img: "https://i.ibb.co/HFFf9zx/x.png" */
        img: "https://i.ibb.co/89mPKvZ/yyey3333.png"
    },
];

const SideNav = () => {
    return (
        <div className='w-[250px] pb-[50px] h-fit bg-[#827b1a] ' >

            <main >
                <h1 className="uppercase text-[#d3d3d3] font-bold pl-6  text-[20px]">- typefaces</h1>

                <div className='flex flex-col gap-3  mt-4'>
                    {links.map(link => (
                        <DropdownLink key={link.title} className1=" h-[20px]" href={link.href} content={<Esto className='flex justify-start' img={link.img} />} >
                            <li className='list-none  font-bold text-[#9C9C9C] uppercase'>{link.title}</li>
                        </DropdownLink >
                    ))}

                </div>

            </main>
        </div>
    )
}

export default SideNav