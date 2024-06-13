

import Image from "next/image";
import { Lexend_Zetta } from 'next/font/google'

const lexedzetta = Lexend_Zetta({
  weight: '900',
  subsets: ['latin'],
  
})


export default function Home() {
  return (

    <div className="">
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
      <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={1300} height={1300}  alt="home" />
    </div>

  )
}