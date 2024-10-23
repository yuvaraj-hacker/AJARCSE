import React, { useEffect, useRef } from "react";

import '../Home/Home.css'
import Dash from "../Side/Dash";



function Home() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      const container = containerRef.current;

      if (imageRef.current && container) {
        const containerRect = container.getBoundingClientRect();
        if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
          imageRef.current.style.marginTop = `${value * 9.5}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>











      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">

          <section className="lg:col-span-5 col-span-6 ">


            <section className="">


              <div class="  bg-[url('/images/Herosection/Frame.png')] lg:h-96 md:h-[450px] h-52  bg-cover bg-center overflow-hidden" ref={containerRef}>
                <div className="max-w-[80rem] mx-auto">

                  <div className="grid grid-cols-2   items-center">


                    <p className="md:ml-auto text-white md:text-4xl  text-center text-sm font-semibold" >
                      Welcome To Open Journal System
                    </p>
                    <div className="flex justify-center">


                      <img ref={imageRef} className="w-96" id="image" src="/images/Herosection/9289258.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>




              <div className="max-w-screen-xl mx-auto w-full px-2 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">

                    <div className="border p-2 rounded-sm border-gray-100 bg-white">


                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                        About
                      </h1>

                      <div className="flex items-center lg:flex-nowrap flex-wrap lg:gap-4">
                        <img src="/images/Herosection/fsfsf.png" alt="" className="w-40 lg:mx-0 mx-auto" />



                        <h1 className="text-justify  mt-3">
                          <strong className="text-[#70a2db] font-bold">
                            International Journal of Digital Innovation, Insight, and Information (IJDIII)
                          </strong>{" "}
                          is a scholarly online, open access, peer-reviewed
                          interdisciplinary, quarterly, and fully refereed journal
                          focusing on theories, methods and applications on Advanced
                          Research in Computer Science, Information Technology and
                          Management Science. It is an international scientific journal
                          that aims to contribute to the constant scientific research
                          and training, so as to promote research in the field of
                          Engineering , Technology and Management Science.
                        </h1>
                      </div>
                    </div>


                    <div className="p-2">
                      <h1 className="bg-[#C0DBF8] md:text-3xl text-lg   text-black  p-2 shadow mt-5 py-2">
                        The Journal covers following areas of Digital Innovation, Insight, and Information
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 bg-white rounded-sm gap-8 py-5">
                      <div className="max-w-full w-full p-2">
                        <div className="flex gap-3 items-center mb-5">

                          <p className="text-center text-[#70a2db]  text-xl font-bold">Digital Innovation</p>
                        </div>








                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>

                          <h1>    Fintech Evolution</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>    AR/VR Applications</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>   Digital Disruption</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>  Mobile Innovation </h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Automation Trends</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Digital Transformation</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> E-commerce Advancements</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Data-Driven Innovation</h1>
                        </h1>


                      </div>
                      <div className="max-w-full p-2 w-full">
                        <div className="flex gap-3 items-center mb-5">

                          <p className="text-center text-[#70a2db] text-xl font-bold">Insight and Analytics</p>
                        </div>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Data-Driven Decisions</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Predictive Modeling</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Customer Analytics</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Real-Time Insights</h1>
                        </h1>




                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Descriptive Analytics</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Retail Analytics</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Predictive Customer Behavior</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>IoT Data Insights</h1>
                        </h1>



























                      </div>
                      <div className="max-w-full p-2 w-full ">
                        <div className="flex gap-3 items-center text-xl font-semibold mb-5">

                          <p className="text-center text-[#70a2db] font-bold text-xl">Information </p>
                        </div>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Data Management</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>Information Security</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Cloud Storage</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>   Data Privacy</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Cybersecurity Protocols</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Information Architecture </h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1> Encryption Standards</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="180" cy="100" r="20" fill="#e74c3c">
                              <animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              />
                            </circle>
                          </svg>
                          <h1>  Big Data Handling</h1>
                        </h1>

                      </div>
                    </div>
                  </div>



                </div>
              </div>


              {/* </div> */}
            </section>

            <section className="bg-white mb-10 px-2">
              <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-5 py-5">
                <h1 className="mt-3 text-center">
                  We publish original research articles, review articles and
                  technical notes. The journal reviews papers within two weeks of
                  submission and publishes accepted articles on the internet
                  immediately upon receiving the final versions.Our fast reviewing
                  process is our strength.
                </h1>

                <h1 className="text-center mt-2">
                  Launch of Next Issue: 25<sup>th</sup> Dec 2024
                </h1>
                <h1 className="text-center mt-2 p-2 font-bold text-[#70a2db] ">
                  Last Date for Submission of Manuscript for next Issue: 18<sup>th</sup> Dec
                  2024
                </h1>

                <h1 className="text-center mt-2">With Warm Regards,</h1>
                <h1 className="text-center font-semibold mt-2">Editor-in-chief</h1>
                <h1 className="text-center font-semibold mt-1">IJDIII</h1>
              </div>
            </section>
          </section>
          <section className="col-span-1mx-auto h-fit p-2 space-y-3 lg:block hidden">
            <Dash />
          </section>
        </section>

      </section>
    </>
  );
}

export default Home;
