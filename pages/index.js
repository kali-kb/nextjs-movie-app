import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Nav(){
  return (
    <>
      <div className="p-6 bg-gray-200">
        <h1 className="text-black text-xl font-bold">MovieApp</h1>
      </div>
    </>
  )
}


function MoviesComponent(){
  return (
    <div className="grid gap-2 w-full mx-auto">
      <div className="h-auto w-44 mt-2 shadow-xs border-2 border-gray-100 mx-auto rounded-sm">
        <div>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg" ></img>          
        </div>
        <div className="flex justify-between font-semibold">
          <h1 className="">The Flash</h1>
          <span className="text-green-600 text-sm">7.8/10</span>          
        </div>
      </div>
      <div className="h-auto w-44 mt-2 shadow-xs border-2 border-gray-100 mx-auto rounded-sm">
        <div>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/74xTEgt7R36Fpooo50r9T25onhq.jpg" ></img>          
        </div>
        <div className="flex justify-between font-semibold">
          <h1 className="">Batman</h1>
          <span className="text-green-600 text-sm">6.8/10</span>          
        </div>
      </div>
      <div className="h-auto w-44 mt-2 shadow-xs border-2 border-gray-100 mx-auto rounded-sm">
        <div>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg" ></img>          
        </div>
        <div className="flex justify-between font-semibold">
          <h1 className="">BlackLight</h1>
          <span className="text-green-600 text-sm">7.8/10</span>          
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <MoviesComponent />
    </>
    
  )
}
