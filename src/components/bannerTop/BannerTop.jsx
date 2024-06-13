import Image from "next/image"
import IconMarca from "../icons/IconMarca"


const BannerTop = () => {
    return (
        <div className="flex w-full h-24 bg-[#e7d03d00]">
            <div className="flex pt-[50px] items-center justify-center bg-[#77777700] w-[20%]">
                {/* <h2 className="text-white">ESTO ES UN BANNER</h2> */}
                <IconMarca />
            </div>
            <div className=" flex justify-center items-center text-[80px] font-black bg-[#FFCCEE] w-[80%] " style={{backgroundImage: `url('https://i.ibb.co/PtzDGhv/Frame-129-1-2.png')`}}>
                <h2 className="mix-blend-overlay">ESTO BANNER</h2>
                {/* <Image className="absolute top-[0%] left-[0%]" src="https://i.ibb.co/L166Yvz/Frame-129-1.pngs" width={1000} height={1000} alt="banner" /> */}
            </div>
        </div>
    )
}

export default BannerTop