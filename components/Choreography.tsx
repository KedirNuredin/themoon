"use client"
import { Choreo } from "@/constants/db"
import { useState } from "react";
import Pagination from "./Pagination";


const Choreography = () => {
  const [currentPage, setCurrentPage] = useState(1);
 const pageSize = 10;
 const onPageChange = (page: number) => {
  setCurrentPage(page)
 }
  return (
    <section id="choreo" className="max-container padding-container transition-all bg-yellow-50 flex flex-col itesm-center gap-10 py-10 pb-24 md:gap-28 lg:py-20 ">
      <div className="flex flex-wrap justify-center">
        {Choreo.slice(0, pageSize * currentPage).map((item)=> (
          <div className="relative flex flex-col m-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <iframe className="relative h-64 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-lg bg-blue-gray-500 shadow-blue-gray-500/40" src={`http://www.youtube.com/embed/${item.link}`} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"></iframe>
            <h3 className="block  p-6 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{item.title}</h3>
            <div className="relative flex px-6 justify-between mb-2">
              <h5 className="text-base antialiased font-light leading-relaxed text-inherit">{item.genre}</h5>
              <p>{item.studio}</p>
            </div> 
          </div>
                   
        ))}
      </div>
      <Pagination items={Choreo.length} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>
    </section>
  )
}

export default Choreography