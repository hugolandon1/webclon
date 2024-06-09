import Image from "next/image";


export default function Home() {
  return(

    <div className="bg-[#1b1b1b] h-screen">
      <div className="flex justify-center">
      <div className="h-screen">
            <video width="3000" height="400" controls="false" autoPlay muted loop>
                <source src="https://res.cloudinary.com/dm2lcbsw2/video/upload/v1717907955/alexnadia_oficial--_unnajz.mp4" type="video/mp4" />
            </video>
        </div>
        <h2>ESTO ES UN HOME</h2>
      </div>
    </div>

  )
}