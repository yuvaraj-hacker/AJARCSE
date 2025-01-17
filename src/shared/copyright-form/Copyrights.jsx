


import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
   const [isActive, setIsActive] = useState(true)
    return (
        <>
            <section className="max-w-[96rem] mx-auto">
                <section className="grid grid-cols-6 gap-5">
                    <section className="lg:col-span-5 col-span-6 ">
                        <section className="">
                            <HeroSection
                            isActive={isActive}
                            activeText="Copyright Form"
                            />

                            <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                                <div className="lg:flex md:flex ">
                                    <div className="max-w-full w-full ">
                                        <div className="border p-2 rounded-sm border-gray-100 bg-white">
                                            <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                                                CopyrightForm
                                            </h1>

                                            <div className="max-w-full w-full ">

                                                <h1 className="lg:text-xl font-semibold mb-2 mt-8">DECLARATION</h1>
                                                <p className="md:w-[450px] leading-relaxed" > I/We
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
                    <section  className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
                        <Dash />
                    </section>
                </section>
            </section>
        </>
    )
}
export default Aboutus


