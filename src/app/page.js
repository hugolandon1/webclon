

import Image from "next/image";
import { Lexend_Zetta } from 'next/font/google'

const lexedzetta = Lexend_Zetta({
  weight: '900',
  subsets: ['latin'],

})


export default function Home() {
  return (

    <div className="w-full h-full">
      <div className="relative">
        <Image className="absolute" src="https://i.ibb.co/XpCkPzq/Group-43.png" width={1300} height={1300} alt="home" />
        <Image className="" src="https://i.ibb.co/SQ6rFGL/Frame-159.png" width={1300} height={1300} alt="home" />
      </div>

      {/* <Image src="https://i.ibb.co/SKn9Cxd/sisisisiais.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/Y7wyNyW/Default-fashion-sport-sneaker-mockup-white-fashion-green-sport-1-3-1-5x.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" /> */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
        <video className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover" width="320" height="240" autoPlay loop muted preload="none">
          <source src="https://res.cloudinary.com/dm2lcbsw2/video/upload/v1718752348/modeloprofessional_djq68o.mp4" type="video/mp4" />
          <track

            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>


    </div>

  )
}