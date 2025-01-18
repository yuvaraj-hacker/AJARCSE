import React, { useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <section className=" ] mx-auto">
        <section className=" ">
          <section className=" ">
            <section className="">
              <HeroSection
                isActive={isActive}
                activeText="Editorial Board"

              />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2   bg-white">
                    <p className="text-center md:text-2xl text-lg">Editorial Board</p>
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
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/editorial.jpeg" alt="" />
                      </div>
                      <div className="text-center h-40 mt-10">
                        Update Will Come Soon.......
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          
        </section>
      </section>
    </>
  )
}
export default Aboutus