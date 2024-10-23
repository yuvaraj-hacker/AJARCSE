



import React, { useEffect, useRef } from 'react'
import Dash from '../Side/Dash';
function Aboutus() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      const container = containerRef.current;
      if (imageRef.current && container) {
        const containerRect = container.getBoundingClientRect();
        // Only apply the scroll effect when the container is in view
        if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
          imageRef.current.style.marginTop = `${value * 9.5}px`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">
          <section className="lg:col-span-5 col-span-6  ">
            <section className="">
              <div class="  bg-[url('/images/Herosection/Frame.png')] lg:h-96 md:h-[450px] h-52 bg-cover bg-center overflow-hidden" ref={containerRef}>
                <div className="max-w-[80rem] mx-auto">
                  <div className="grid grid-cols-2   items-center">
                    <p className="ml-auto text-white md:text-4xl text-lg">
                      Contact Us
                    </p>
                    <div className="flex justify-center">
                      <img ref={imageRef} className="w-96" id="image" src="/images/Herosection/9289258.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="border p-2 rounded-sm border-gray-100 bg-white">
                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                        Contact Us
                      </h1>

                      <div className="max-w-full w-full ">


                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                          <div className=" lg:px-20 lg:py-10 px-5 py-5">
                            <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-3xl border border-slate-300  shadow shadow-primary-skyblue-color">
                             

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
                                    className="py-3 px-5 text-center text-sm bg-[#4b2d8b] hover:text-white  text-white rounded-lg bg-primary-red-color sm:w-fit  "
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
                                href="mailto:editor@IJDIII.com"
                                className="text-[#4b2d8b] "
                              >
                                editor@ijdiii.com
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
          <section className="col-span-1mx-auto h-fit p-2 space-y-3 lg:block hidden">
            <Dash />
          </section>
        </section>
      </section>
    </>
  )
}
export default Aboutus