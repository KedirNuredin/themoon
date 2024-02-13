"use client"
import Link from "next/link"
import { NAV_LINKS } from './../constants/index';
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    function toggleMenu (){
         setToggle((toggle) => (
            toggle = !toggle
          ) )
    }
  return (
    <nav className="flexBetween max-container padding-container relativew-full z-30 py-5">
        <Link href="/">The Moon
       
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
            ))}
        </ul>
        {/* {!toggle &&<Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"  onClick={toggleMenu}/>}
        <div className="flexColumn justify-center realtive">
        {toggle && <Image src="close.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"  onClick={toggleMenu}/>}
        {toggle && <ul className="sm:flexColumn">
        {NAV_LINKS.map((link) => (
                <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
            ))}
        </ul>}
        </div> */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Image src={toggle ? 'close.svg' : 'menu.svg'} alt="menu" width={32} height={32} className='object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 btn_dark_green_outline absolute top-20 right-0 mx-4 my-2 z-10 min-w-[140px] rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-white">{link.label}</Link>
            ))}
            </ul>
          </div>
       </div>
    </nav>
  )
}

export default Navbar