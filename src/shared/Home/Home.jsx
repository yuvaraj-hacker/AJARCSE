import React, { useEffect, useRef, useState } from "react";

import '../Home/Home.css'
import Dash from "../Side/Dash";
import HeroSection from "../HeroSection/HeroSection";



function Home() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">
          <section className="lg:col-span-5 col-span-6 ">
            <section className="">
              <HeroSection isActive={isActive} activeText="Welcome To American Journal of Advanced Research in Computer Science & Engineering" />
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
                            American Journal of Advanced Research in Computer Science & Engineering (AJARCSE)
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
                        The Journal covers following areas :
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 bg-white rounded-sm   py-5">
                      <div className="max-w-full w-full p-2">
                        {/* <div className="flex gap-3 items-center mb-5">
                          <p className="text-center text-[#70a2db]  text-xl font-bold">Digital Innovation</p>
                        </div> */}
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/* {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>AI & Machine Learning Innovations</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Blockchain & Fintech Evolution</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  Quantum Computing Trends</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  Edge Computing & IoT </h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Cybersecurity & Threat Intelligence</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Cloud Computing Advances</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>Big Data & Predictive Analytics</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Augmented & Virtual Reality (AR/VR)</h1>
                        </h1>


                      </div>
                      <div className="max-w-full p-2 w-full">
                        {/* <div className="flex gap-3 items-center mb-5">

                          <p className="text-center text-[#70a2db] text-xl font-bold">Insight and Analytics</p>
                        </div> */}


                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  Automation & Robotics</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Digital Transformation Strategies</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>5G & Future Networks</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Smart Cities & IoT Integration</h1>
                        </h1>




                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Human-Computer Interaction</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>Deep Learning & Neural Networks</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>Computational Intelligence</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  Natural Language Processing (NLP)</h1>
                        </h1>
                      </div>
                      <div className="max-w-full p-2 w-full ">
                        {/* <div className="flex gap-3 items-center text-xl font-semibold mb-5">

                          <p className="text-center text-[#70a2db] font-bold text-xl">Information </p>
                        </div> */}








                        {/*                         
                        Wearable Technologies & Smart Devices
                        Cloud-Native Applications
                        Digital Twin Technology
                        Embedded Systems & Real-Time Computing
                        Metaverse & Virtual Environments
                        Future of Computing & Emerging Tech */}

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Bioinformatics & Computational Biology</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>   Cryptography & Data Security</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  E-Governance & Digital Policies</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Green Computing & Energy Efficiency</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Software Engineering Trends</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1>  Computer Vision & Image Processing</h1>
                        </h1>

                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> E-Commerce & Smart Payment Systems</h1>
                        </h1>
                        <h1 className="flex items-center gap-2 mb-1">
                          <svg width="30" height="30" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                            <circle cx="100" cy="100" r="20" fill="#e74c3c">
                              {/*<animate
                                attributeName="cx"
                                from="100"
                                to="180"
                                dur="2s"
                                repeatCount="indefinite"
                                keyTimes="0;0.5;1"
                                values="100;180;100"
                              /> */}
                            </circle>
                          </svg>
                          <h1> Ethical AI & Responsible Computing</h1>
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
                  Launch of Next Issue: 25<sup>th</sup> June 2025
                </h1>
                <h1 className="text-center mt-2 p-2 font-bold text-[#70a2db] ">
                  Last Date for Submission of Manuscript for next Issue: 18<sup>th</sup> June
                  2025
                </h1>

                <h1 className="text-center mt-2">With Warm Regards,</h1>
                <h1 className="text-center font-semibold mt-2">Editor-in-chief</h1>
                <h1 className="text-center font-semibold mt-1">AJARCSE</h1>
              </div>
            </section>
          </section>
          <section className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section>
        </section>

      </section>
    </>
  );
}

export default Home;
