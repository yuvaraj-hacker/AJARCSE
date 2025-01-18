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
              <HeroSection
                isActive={isActive}
                activeText="Contact Us"
              />
              <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2   bg-white">
                    <p className="text-center md:text-2xl text-lg">Contact Us</p>
                      <div class="flex items-center   justify-center gap-1.5">
                        <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
                        <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
                        <span class="w-3.5 h-3.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
                        <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
                        <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
                      </div>
                      <div className="max-w-full w-full ">
                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                          <div className=" lg:px-20 lg:py-10 px-5 py-5">
                            <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-lg border  ">
                              <form className="w-full space-y-4" ngNativeValidate>
                                <div>
                                  <label
                                    for="email"
                                    className="block mb-2 text-sm   text-gray-900 "
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    ngModel
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                                    placeholder="Enter Your Name"
                                    required
                                  />
                                </div>
                                <div>
                                  <label
                                    for="email"
                                    className="block mb-2 text-sm   text-gray-900 "
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    ngModel
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                                    placeholder="Enter Your Mail"
                                    required
                                  />
                                </div>
                                <div>
                                  <label
                                    for="email"
                                    className="block mb-2 text-sm   text-gray-900 "
                                  >
                                    Contact Number
                                  </label>
                                  <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    ngModel
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                                    placeholder="Enter Your Number"
                                    required
                                  />
                                </div>
                                <div className="sm:col-span-2">
                                  <label
                                    for="message"
                                    className="block mb-2 text-sm   text-gray-900   "
                                  >
                                    Your Message
                                  </label>
                                  <textarea
                                    id="message"
                                    name="message"
                                    ngModel
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500     "
                                    placeholder="Leave a Message..."
                                  ></textarea>
                                </div>
                                <div className="text-center ">
                                  <button
                                    type="submit"
                                    className="py-3 px-5 text-center text-sm hover:bg-[#DBECEA] hover:text-[#388883] bg-[#388883]   text-white rounded-lg  sm:w-fit  "
                                  >
                                    Send message
                                  </button>
                                </div>
                              </form>
                            </div>
                            <h3 className="mt-10 text-center text-sm md:text-lg">
                              {" "}
                              For any queries contact Email :{' '}
                              <a
                                href="mailto:editor@AJARCSE.com"
                                 className="text-[#007BFF] "
                              >
                                editor@ajarcse.com
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* <section  className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section> */}
        </section>
      </section>
    </>
  )
}
export default Aboutus