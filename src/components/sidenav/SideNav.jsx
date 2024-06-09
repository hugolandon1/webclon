import DropdownLink from "../dropdown/DropdownLink"
import Esto from "../esto/Esto"

const links = [
    {
        title: "basement grotesk",
        href: "/",
        img: "https://i.ibb.co/mG3mbQL/Frame-55-2.png"
    },
    {
        title: "adhesion",
        href: "/mujer",
        img: "https://i.ibb.co/r0kRyF5/Frame-56-1.png"
    },

    {
        title: "b-mecha",
        href: "/hombre",
        img: "https://i.ibb.co/Nr6wvWN/Frame-57-1.png"
    },

    {
        title: 'blob',
        href: '/patas',
        img: "https://i.ibb.co/tccK8fZ/b.png"
    },
    {
        title: 'bunker',
        href: '/about',
        img: "https://i.ibb.co/RY63275/f.png"
    },
    {
        title: 'caniche',
        href: '/contact',
        img: "https://i.ibb.co/4t26C9g/n.png"
    },
    {
        title: 'carpenter',
        href: '/contact',
        img: "https://i.ibb.co/17cMrT5/k.png"
    },
    {
        title: 'curia',
        href: '/contact',
        img: "https://i.ibb.co/09tz29z/l.png"
    },
    {
        title: 'ffflauta',
        href: '/contact',
        img: "https://i.ibb.co/nPNpKtk/w.png"
    },
    {
        title: 'trovador',
        href: '/contact',
        img: "https://i.ibb.co/TMhctwd/s.png"
    },
    {
        title: 'xer0',
        href: '/contact',
        img: "https://i.ibb.co/HFFf9zx/x.png"
    },
];

const SideNav = () => {
    return (
        <div className='bg-[#121212] w-[250px] pl-6 h-screen absolute' >

            <main className="">
                <h1 className="uppercase text-[#d3d3d3] font-bold pl-6 font-mono text-[20px]">- typefaces</h1>
                
                <div className='flex flex-col gap-3  mt-4'>
                    {links.map(link => (
                        <DropdownLink className1=" h-[20px]" href={link.href} content={<Esto className='flex justify-start' img={link.img} />} >
                            <li className='list-none  font-bold text-[#b6b6b6] uppercase'>{link.title}</li>
                    </DropdownLink >
                    ))}
                    
                    {/* <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/r0kRyF5/Frame-56-1.png" />} >
                        <li className='list-none font-bold text-[#b6b6b6] uppercase'>adhesion</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/Nr6wvWN/Frame-57-1.png" />} >
                        <li className='list-none font-bold text-[#b6b6b6] uppercase'>b-mecha</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/tccK8fZ/b.png" />} >
                        <li className='list-none font-bold text-[#b6b6b6] uppercase'>blob</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/RY63275/f.png" />} >
                        <li className='list-none font-bold text-[#b6b6b6] uppercase'>bunker</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/4t26C9g/n.png" />} >
                        <li className='list-none font-bold text-[#b6b6b6] uppercase'>caniche</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/17cMrT5/k.png" />} >
                        <li className='list-none font-regular text-[#b6b6b6] uppercase'>carpenter</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/09tz29z/l.png" />} >
                        <li className='list-none font-regular text-[#b6b6b6] uppercase'>curia</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/nPNpKtk/w.png" />} >
                        <li className='list-none font-regular text-[#b6b6b6] uppercase'>ffflauta</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/TMhctwd/s.png" />} >
                        <li className='list-none font-regular text-[#b6b6b6] uppercase'>trovador</li>
                    </DropdownLink >
                    <DropdownLink className1=" h-[20px]" href="/" content={<Esto className='flex justify-start' img="https://i.ibb.co/HFFf9zx/x.png" />} >
                        <li className='list-none font-regular text-[#b6b6b6] uppercase'>xer0</li>
                    </DropdownLink > */}
                </div>

            </main>
        </div>
    )
}

export default SideNav