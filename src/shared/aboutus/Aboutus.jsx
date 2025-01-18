import React, { useState } from 'react'
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
              <HeroSection isActive={isActive} activeText="About Us" />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2   bg-white">
                      <p className="text-center md:text-2xl text-lg">About Us</p>
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
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/advanceearch.png" alt="" />
                      </div>
                      <h1 className="  mb-2  mt-8 text-center leading-relaxed ">American Journal of Advanced Research in Computer Science & Engineering (AJARCSE) is a scholarly peer-reviewed journal dedicated to advancing the understanding and application of information technology and management science in today's digital age.</h1>
                      <h1 className="font-semibold  lg:text-xl mt-8 mb-2 underline underline-offset-4">Scope</h1>
                      <h1 className="  text-justify leading-relaxed mb-3">The scope of the AJARCSE is to provide an academic medium and an important
                        reference for the advancement and dissemination of research results that support high-level learning,
                        teaching and research in the fields of engineering, science and technology. Original theoretical work
                        and application-based studies, which contributes to a better understanding of engineering, science and
                        technological challenges, are encouraged.</h1>
                      <h1 className=" lg:text-xl font-semibold mt-8 mb-2  underline underline-offset-4">Mission</h1>
                      <h1 className="  text-justify leading-relaxed mb-3">Our mission is to provide a platform for researchers, academicians, professionals, and students to publish innovative research in the fields of information technology (IT) and management science. By fostering rigorous inquiry and dialogue, we aim to contribute to the body of knowledge that informs both theory and practice in these critical areas.</h1>

                      <h1 className=" lg:text-xl font-semibold mt-8 mb-2  underline underline-offset-4">Scope</h1>
                      <ul className="list-disc gap-2  ml-5 mb-3">
                        <li>Information systems and technology</li>
                        <li>Data analytics and business intelligence</li>
                        <li>E-commerce and digital marketing</li>
                        <li>IT governance and cybersecurity</li>
                        <li>Decision sciences and operations research</li>
                        <li>Knowledge management and organizational behavior</li>

                      </ul>
                      <h1 className="font-semibold  lg:text-xl mt-8 mb-2  underline underline-offset-4">Publication Ethics</h1>
                      <h1 className="  text-justify leading-relaxed mb-3">We adhere strictly to the highest ethical standards in publishing and strive for transparency, integrity, and fairness in our peer-review process. Authors can expect a constructive review process that maintains confidentiality and upholds academic rigor.</h1>

                      <h1 className="font-semibold  lg:text-xl mt-8 mb-2  underline underline-offset-4">Audience</h1>
                      <h1 className="  text-justify leading-relaxed mb-3">Our audience includes researchers, educators, practitioners, and policymakers interested in the latest advancements and applications in IT and management science. We encourage interdisciplinary research that bridges the gap between theory and practice.</h1>
                      <h1 className="font-semibold  lg:text-xl mt-8 mb-2  underline underline-offset-4">Submission Guidelines</h1>
                      <h1 className="  text-justify leading-relaxed ">Authors are invited to submit original manuscripts that have not been published previously and are not under consideration elsewhere. Detailed submission guidelines can be found on our website to ensure clarity and consistency in the submission process.
                      </h1>

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