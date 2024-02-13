import Image from "next/image"
import Button from "./button"
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-24 md:gap-10 lg:py-20 xl:flex-row">
      <Image src="/hero.jpg" alt='hero' width={480} height={480} className=" rounded-tl-[20px] rounded-tr-[180px] shadow-xl" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 justify-center"> 
        <h1 className="bold-52 lg:bold-88">Waacking Dancer TheMoon</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[530px]">Hi i am waacking dancer the moon welcome to my page</p>
        <div className="xs:hidden lg:flex flex items-center mt-6" >
          <Button type="button" title="Download CV" variant="btn_green"/>
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-3  items-start">
        <Button type="button" title="Download CV" variant="btn_green"/>
      </div>
    </section>
  )
}

export default Hero