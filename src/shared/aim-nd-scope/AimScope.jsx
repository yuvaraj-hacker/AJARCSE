



import React, { useEffect, useRef, useState } from 'react'

import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';

function Aboutus() {



  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">

          <section className="lg:col-span-5 col-span-6  ">
            <section className="">
              <HeroSection isActive={isActive} activeText="Aim and Scope" />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="border p-2 rounded-sm border-gray-100 bg-white">
                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                        Aim and Scope
                      </h1>
                      <div className="max-w-full w-full">
                        <h1 className="font-semibold lg:text-xl mb-2 mt-8">Aim</h1>
                        <h1 className="  mb-3  text-justify leading-loose">International Journal of Advanced Research in Information Technology and
                          Management Science is an online open access journal, basically the aim of this journal to promote the
                          new Innovative ideas in all fields of Engineering and Technology. Basically, this Journal will help to
                          promote all Innovations in Engineering and Technology on one platform so that if anybody wants to
                          integrate their ideas with other field of technology, they can implement it with the help of this
                          Journal.</h1>
                        <h1 className="font-semibold  lg:text-xl mt-8 mb-2">Scope</h1>
                        <h1 className="  text-justify leading-loose">The scope of the AJARCSE is to provide an academic medium and an important
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
          <section  className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section>
        </section>
      </section>
    </>
  )
}

export default Aboutus