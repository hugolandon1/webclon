import { Lexend_Zetta } from 'next/font/google'
import Image from 'next/image'

const lexedzetta = Lexend_Zetta({
  weight: '900',
  subsets: ['latin'],
  
})

const Patas = () => {
    return (
      <div className="">
        <Image src="https://i.ibb.co/1rzF6hk/Frame-142-1.png" width={300} height={300} alt="home" />
      </div>
    )
  }
  
  export default Patas