



import React, { useEffect, useRef, useState } from 'react'

import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';

function Aboutus() {



  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <section className="  mx-auto">
        <section className=" ">

          <section className="  ">
            <section className="">
              <HeroSection isActive={isActive} activeText="Aim and Scope" />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2  ">
                      <p className="text-center md:text-2xl text-lg">Aim and Scope</p>
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
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/scope.jpg" alt="" />
                      </div>
                      <div className="max-w-full w-full">
                        <h1 className="font-semibold lg:text-xl mb-2 mt-8">Aim</h1>
                        <h1 className="  mb-3  text-justify leading-loose md:text-base text-sm">International Journal of Advanced Research in Information Technology and
                          Management Science is an online open access journal, basically the aim of this journal to promote the
                          new Innovative ideas in all fields of Engineering and Technology. Basically, this Journal will help to
                          promote all Innovations in Engineering and Technology on one platform so that if anybody wants to
                          integrate their ideas with other field of technology, they can implement it with the help of this
                          Journal.</h1>
                        <h1 className="font-semibold  lg:text-xl mt-8 mb-2">Scope</h1>
                        <h1 className="  text-justify leading-loose md:text-base text-sm">The scope of the AJARCSE is to provide an academic medium and an important
                          reference for the advancement and dissemination of research results that support high-level learning,
                          teaching and research in the fields of engineering, science and technology. Original theoretical work
                          and application-based studies, which contributes to a better understanding of engineering, science and
                          technological challenges, are encouraged.</h1>
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