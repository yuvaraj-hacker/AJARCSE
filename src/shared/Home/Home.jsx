import React, { useState } from "react";
import '../Home/Home.css'
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>

      <section className="  ">
        <section className="  bg-[#388883]">
          <section className=" px-1  ">
            {/* <HeroSection isActive={isActive} activeText="Welcome To American Journal of Advanced Research in Computer Science & Engineering" /> */}
            {/* <div className="bg-[url('/images/Herosection/advce.jpg')]  bg-cover bg-center  w-full  md:rounded-t-[3.5rem]  rounded-t-[2rem] "  >
              <div className="max-w-[80rem] mx-auto px-5">
                <div className="grid md:grid-cols-2">
                  <div className="text-white my-10 space-y-5">
                    <p className="flex justify-center items-center      font-bold  text-white md:text-3xl">American Journal of Advanced Research in Computer Science & Engineering (AJARCSE)</p>
                    <div className=" bg-[#388883] p-3 w-fit rounded-3xl text-sm cursor-pointer">
                      Publish With Us
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="relative bg-[url('/images/Herosection/advce.jpg')] bg-cover bg-center w-full md:rounded-t-[3.5rem] rounded-t-[2rem]">
              {/* Greenish Overlay */}
              <div className="absolute inset-0 bg-green-900 opacity-55   md:opacity-65 rounded-t-[2rem] md:rounded-t-[3.5rem]"></div>
              <div className="max-w-[80rem] mx-auto px-5 relative z-10">
                <div className="grid lg:grid-cols-2">
                  <div className="text-white my-10 space-y-5">
                    <p className="flex justify-center items-center font-bold text-white md:text-3xl">
                      American Journal of Advanced Research in Computer Science & Engineering (AJARCSE)
                    </p>
                    <div className="bg-[#388883] md:p-3 p-2 w-fit rounded-3xl border-white border-2 md:text-sm text-xs cursor-pointer animate-glow">
                      Publish With Us
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section className=" bg-white  px-1">
            <section className="bg-[#dbecea] md:rounded-b-[3.5rem] rounded-b-[2rem]   ">
              <div className="max-w-[80rem] mx-auto px-5 md:pt-10 pt-5 md:pb-16 pb-5">
                <div className="grid md:grid-cols-2 md:gap-5 gap-5 items-center">
                  <div className="relative md:px-0 px-3 mx-auto" >
                    <img className="w-96  rounded-2xl  " src="/images/Herosection/ai-images.jpg" alt="" />
                    <img className="w-96 absolute top-5 left-5  rounded-2xl lg:block hidden  " src="/images/Herosection/advanceearch.png" alt="" />
                  </div>
                  <div className="text-black ">
                    <p className="text-justify md:text-base text-sm">Welcome to <span className="md:text-lg   text-base"> American Journal of Advanced Research in Computer Science & Engineering (AJARCSE)</span> is a scholarly online,
                      open access, peer-reviewed interdisciplinary, quarterly, and fully refereed journal focusing on theories, methods and
                      applications on Advanced Research in Computer Science, Information Technology and Management Science. It is an international
                      scientific journal that aims to contribute to the constant scientific research and training, so as to promote research in
                      the field of Engineering , Technology and Management Science.</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="md:my-10  my-5 mt-10 ">
          <p className="text-center md:text-2xl text-xl">Research Areas Covered</p>
          <div class="flex items-center   justify-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
            <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
            <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
            <span class="w-3.5 h-3.5 bg-[#388883] rounded-full"></span>
            <span class="w-2.5 h-2.5 bg-[#388883] rounded-full"></span>
            <span class="w-2 h-2 bg-[#388883] rounded-full"></span>
            <span class="w-1.5 h-1.5 bg-[#388883] rounded-full"></span>
          </div>
          {/* <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div> */}

          <div className="  mx-auto max-w-[70rem] ">
            <div className=" ">
              <div className="   ">
                {/* <div className="p-2">
                  <h1 className="bg-[#C0DBF8] md:text-3xl text-lg   text-black  p-2 shadow mt-5 py-2">
                    The Journal covers following areas :
                  </h1>
                </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 bg-white rounded-sm   py-5">
                  <div className="max-w-full w-full p-2 md:text-base text-sm">

                    <h1 className="flex items-center gap-2 md:mb-1">
                      {/* <svg width="30" height="30" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                        <circle cx="100" cy="100" r="20" fill="#e74c3c">

                        </circle>
                      </svg> */}
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6  "> 1 </p>
                      <h1 className="  ">AI & Machine Learning Innovations</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      {/* <svg width="30" height="30" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                        <circle cx="100" cy="100" r="20" fill="#e74c3c">

                        </circle>
                      </svg> */}
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 2 </p>
                      <h1> Blockchain & Fintech Evolution</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      {/* <svg width="30" height="30" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" stroke="#3498db" strokeWidth="10" fill="none" />
                        <circle cx="100" cy="100" r="20" fill="#e74c3c">
                        </circle>
                      </svg> */}
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 3 </p>
                      <h1>  Quantum Computing Trends</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 4 </p>
                      <h1>  Edge Computing & IoT </h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 5 </p>
                      <h1> Cybersecurity & Threat Intelligence</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 6 </p>
                      <h1> Cloud Computing Advances</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 7 </p>
                      <h1>Big Data & Predictive Analytics</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 8 </p>
                      <h1> Augmented & Virtual Reality (AR/VR)</h1>
                    </h1>


                  </div>
                  <div className="max-w-full p-2 w-full md:text-base text-sm">

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 9 </p>
                      <h1>  Automation & Robotics</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 10 </p>
                      <h1> Digital Transformation Strategies</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 11 </p>
                      <h1>5G & Future Networks</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 12 </p>
                      <h1> Smart Cities & IoT Integration</h1>
                    </h1>




                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 13 </p>
                      <h1> Human-Computer Interaction</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 14 </p>
                      <h1>Deep Learning & Neural Networks</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 15 </p>
                      <h1>Computational Intelligence</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 16 </p>
                      <h1>  Natural Language Processing (NLP)</h1>
                    </h1>
                  </div>
                  <div className="max-w-full p-2 w-full md:text-base text-sm ">

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 17 </p>
                      <h1> Bioinformatics & Computational Biology</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 18 </p>
                      <h1>   Cryptography & Data Security</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 19 </p>
                      <h1>  E-Governance & Digital Policies</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 20 </p>
                      <h1> Green Computing & Energy Efficiency</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 21 </p>
                      <h1> Software Engineering Trends</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 22 </p>
                      <h1>  Computer Vision & Image Processing</h1>
                    </h1>

                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 23 </p>
                      <h1> E-Commerce & Smart Payment Systems</h1>
                    </h1>
                    <h1 className="flex items-center gap-2 md:mb-1">
                      <p className="jersey-15-regular text-3xl text-[#388883] w-6"> 24 </p>
                      <h1> Ethical AI & Responsible Computing</h1>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white mb-10 px-2">
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
            </section> */}
      </section>




    </>
  );
}

export default Home;
