import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dash() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="border border-[#70a2db] text-center bg-white p-2">
                <button className="p-2 border bg-[#EDF5FF] hover:bg-white">
                    Submit New Manuscript
                </button>
            </div>

            <div className="border border-[#70a2db] text-center bg-white">
                <Link to='/' className={` ${isActive("/") ? "bg-white" : ""}`}>
                    <div className="p-2 ">
                        <button className={`p-2 w-full border flex items-center gap-3 ${isActive("/") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Home.png" alt="" />
                            Home
                        </button>
                    </div>
                </Link>
                
                <Link to='/aboutus' className={` ${isActive("/aboutus") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/aboutus") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/About.png" alt="" />
                            About Us
                        </button>
                    </div>
                </Link>

                <Link to='/aim-nd-scope' className={` ${isActive("/aim-nd-scope") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/aim-nd-scope") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Sniper.png" alt="" />
                            Aim & Scope
                        </button>
                    </div>
                </Link>

                <Link to='/editorial-board' className={` ${isActive("/editorial-board") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/editorial-board") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Noticeboard.png" alt="" />
                            Editorial Board
                        </button>
                    </div>
                </Link>

                <Link to='/issues' className={` ${isActive("/issues") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/issues") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Confusion.png" alt="" />
                            Issues
                        </button>
                    </div>
                </Link>

                <Link to='/author-guidelines' className={` ${isActive("/author-guidelines") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/author-guidelines") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Coach.png" alt="" />
                            Author Guidelines
                        </button>
                    </div>
                </Link>

                <Link to='/copyrights-form' className={` ${isActive("/copyrights-form") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/copyrights-form") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Copyright All Rights Reserved.png" alt="" />
                            Copyright Form
                        </button>
                    </div>
                </Link>

                <Link to='/contactus' className={` ${isActive("/contactus") ? "bg-white" : ""}`}>
                    <div className="p-2">
                        <button className={`p-2 w-full border flex items-center gap-3  ${isActive("/contactus") ? "bg-white" : "bg-[#EDF5FF]"} hover:bg-white`}>
                        <img className='w-6' src="/images/Herosection/Contact.png" alt="" />
                            Contact Us
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Dash;
