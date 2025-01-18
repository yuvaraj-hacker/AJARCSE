

import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <section className="  mx-auto">
        <section className=" ">
          <section className=" ">
            <section className="">
              <HeroSection
                isActive={isActive}
                activeText="Publication Ethics"
              />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  bg-white">
                    <p className="text-center md:text-2xl text-lg">Publication Ethics</p>
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
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/Ethics.jpg" alt="" />
                      </div>

                      <div className="max-w-full w-full leading-relaxed">
                        <ul className='mt-8 list-disc list-outside pl-5'>
                          <li>All articles in the International Journal of Advanced Research in Information Technology and Management Science (AJARCSE) journals are of Open Access (OA).</li>
                          <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
                          <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
                        </ul>


                      </div>

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