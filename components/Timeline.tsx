import { Instructor } from "@/constants/themoon"
import Image from "next/image"

const Timeline = () => {
  return (
    <section id="career" className="max-container padding-container flex flex-col gap-10 py-10 pb-24 md:gap-28 lg:py-20">
      <div className="flex flex-wrap gap-3 lg:justify-center ">
    {Instructor.map((item) => (
      <div className="flex gap-3 bg-gray-50 h-48 flex-col text-white items-center justify-center rounded-xl p-6">
        <Image src={`/${item.icon}`} alt={item.name} width={48} height={48} />
        <h3>{item.name}</h3>
        <h5>{item.title}</h5>
      </div>
    ))}
      </div>
    </section>
  )
}

export default Timeline