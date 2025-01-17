import React, { useEffect, useRef } from 'react';

const HeroSection = ({ isActive, activeText, defaultText }) => {



    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
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
        }
    }, []);
    return (
        <div className="bg-[url('/images/Herosection/BG.png')] lg:h-96 md:h-[450px]  bg-cover bg-center overflow-hidden relative" ref={containerRef}>
            <img className="absolute z-10 lg:h-96 md:h-[450px]   w-full h-full" src="/images/Herosection/shade.png" alt="shade" ref={imageRef} />
            <div className="max-w-[80rem] mx-auto md:mt-0 mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <p className="md:ml-auto text-white md:text-4xl text-xl text-center  merri md:p-0 p-2 font-semibold">
                        {isActive ? activeText : defaultText}
                    </p>
                    <div className="flex justify-center">
                        <img className=" md:h-96 z-40 mx-auto" src="/images/Herosection/Advanced-reesearch.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
