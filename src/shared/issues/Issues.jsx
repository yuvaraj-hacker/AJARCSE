





import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
    const [isActive, setIsActive] = useState(true);

    return (
        <>
            <section className="max-w-[96rem] mx-auto">
                <section className="grid grid-cols-6 gap-5">
                    <section className="lg:col-span-5 col-span-6 ">
                        <section className="">
                            <HeroSection
                            isActive={isActive}
                            activeText="Issues"
                            />
                            <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                                <div className="lg:flex md:flex ">
                                    <div className="max-w-full w-full ">
                                        <div className="border p-2 rounded-sm border-gray-100 bg-white">
                                            <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                                                Issues
                                            </h1>
                                            <div className="max-w-full w-full ">

                                                <div className='grid  grid-flow-row grid-cols-2 mt-5 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                                                    <div className=' min-h-52 '>
                                                        <h1 className=' text-black p-2 pl-5 mb-2'>2024</h1>
                                                        <ul className='list-disc pl-5'>
                                                            <li><a href="#" className='text-[#4b2d8b] underline'>Volume 1  Issue 1</a></li>
                                                        </ul>
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