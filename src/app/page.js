

import Image from "next/image";
import { Lexend_Zetta } from 'next/font/google'

const lexedzetta = Lexend_Zetta({
  weight: '900',
  subsets: ['latin'],

})


export default function Home() {
  return (

    <div className="relative w-full h-full flex justify-center items-center bg-pink-200 ">
      <div className=" pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
       
      <video className="absolute top-0 right-o bottom-0 left-0 object-cover w-full" width="320" height="240" autoPlay muted loop preload="none">
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