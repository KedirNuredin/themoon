import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <section className="max-container padding-container transition-all bg-yellow-50 flex flex-col itesm-center justify-center gap-10 py-10 pb-14 md:gap-10 lg:py-10 ">
      <div className='flex items-center justify-center gap-6'>
        <Link className="cursor-pointer" href="https://www.instagram.com/diamondmoon_omw/"> <Image src="./instagram.svg" alt="instagram" width={24} height={24}/> </Link>
        <Link className="cursor-pointer" href="https://www.tiktok.com/@diamondmoon77"> <Image src="./tiktok.svg" alt="tiktok" width={24} height={24}/></Link>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <p>© Copyright 2024</p>
        <p className="text-white">Made by Kedir Nuredin</p>
      </div>
    </section>
  )
}

export default Footer