import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <section className="  mx-auto">
        <section className=" ">
          <section className="   ">
            <section className="">
              <HeroSection
                isActive={isActive}
                activeText="   Abstracting and Indexing"
              />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2     bg-white">
                      <p className="text-center md:text-2xl text-lg">Abstracting and Indexing</p>
                      <div class="flex items-center   justify-center gap-1.5">
                        <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
                        <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
                        <span class="w-3.5 h-3.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
                        <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
                      </div>
                      <div className='mx-auto mt-4 '>
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/42878.jpg" alt="" />
                      </div>

                      <p className="mt-8 md:text-base text-sm ">Selected  AJARCSE will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* <section className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section> */}
        </section>
      </section>
    </>
  )
}
export default Aboutus