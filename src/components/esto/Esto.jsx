
import Image from "next/image";


const Esto = ({ img, className="" }) => {
    return (
        <div className={` w-[400px] ${className}`}>
            <Image className=""
                src={img}
                width={200}
                height={200} 
                alt="esto es un leon"
                blurDataURL="data:..."
                placeholder="blur"
                />
        </div>
    )
}

export default Esto;