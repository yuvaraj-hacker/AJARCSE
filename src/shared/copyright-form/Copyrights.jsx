


import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
    const [isActive, setIsActive] = useState(true)
    return (
        <>
            <section className="  mx-auto">
                <section className=" ">
                    <section className="  ">
                        <section className="">
                            <HeroSection
                                isActive={isActive}
                                activeText="Copyright Form"
                            />

                            <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                                <div className="lg:flex md:flex ">
                                    <div className="max-w-full w-full ">
                                        <div className=" p-2   bg-white">
                                            <p className="text-center md:text-2xl text-lg">Copyrights Form</p>
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
                                                <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/copy.jpg" alt="" />
                                            </div>

                                            <div className="max-w-full w-full md:text-base text-sm ">

                                                <h1 className="lg:text-xl font-semibold mb-2 mt-8">DECLARATION</h1>
                                                <p className="md:w-[450px] leading-relaxed " > I/We
                                                    ____________________________.  The author / authors of the research paper/article
                                                    entitled ______________________
                                                    authorize you to publish the above mentioned paper/article in AJARCSE.</p>
                                                <h1 className=" lg:text-xl font-semibold mt-8 mb-2">It is herein agreed that:</h1>
                                                <h1 className=" text-justify mb-2">
                                                    1. I/We will not publish his/her above said contribution anywhere else
                                                    without the prior written permission of the publisher unless it has
                                                    been changed substantially.</h1>
                                                <h1 className=" text-justify mb-2"></h1>
                                                <h1 className=" text-justify mb-2">2. I/ We declare and warrants that his/her/their contribution is original,
                                                    except for such excerpts from copyrighted works as may be included
                                                    with the permission of the copyright holder and author thereof, that
                                                    it contains no libelous statements, and does not infringe on any
                                                    copyright, trademark, patent, statutory right, or propriety right of
                                                    others. The Author signs for and accepts responsibility for releasing
                                                    this material on behalf of any and all co-authors.</h1>
                                                <h1 className=" text-justify mb-2">3. The Author also warrants that he or she has the right to enter into
                                                    this Agreement, the Article contains no libelous or unlawful
                                                    statements, contains no instructions that may cause harm or injury and
                                                    does not violate the copyright or trademark, or infringes on the rights
                                                    or the privacy of others; and that all statements in the Article
                                                    asserted as facts are either true or are based upon reasonable research.</h1>
                                                <h1 className=" text-justify mb-2">4. I/We agree to indemnify the Editors AJARCSE against all claims
                                                    and expenses arising from any breach of warranty from me/us in this
                                                    agreement.</h1>

                                                <div className="flex justify-between flex-wrap lg:gap-0 gap-5 items-center mt-5">
                                                    <div>
                                                        <h1>Date:</h1>
                                                        <h1>Mobile:</h1>
                                                    </div>
                                                    <div className="text-center">
                                                        <h1>1st Author Signature 2nd Author Signature</h1>
                                                        <h1>Author Name: Author Name:</h1>
                                                        <h1>Address Address</h1>
                                                    </div>
                                                </div>

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


