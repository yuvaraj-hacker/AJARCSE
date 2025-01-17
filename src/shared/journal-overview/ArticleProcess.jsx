


import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">
          <section className="lg:col-span-5 col-span-6 ">
            <section className="">
              <HeroSection
                isActive={isActive}
                activeText="Article Processing"
              />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="border p-2 rounded-sm border-gray-100 bg-white">
                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                        Article Processing
                      </h1>
                      <div className="max-w-full w-full leading-relaxed">

                        <ul className='mt-8 list-disc list-outside pl-5 '>
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
          <section  className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section>
        </section>
      </section>
    </>
  )
}
export default Aboutus