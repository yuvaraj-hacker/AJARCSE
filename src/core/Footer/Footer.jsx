// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom'; 


// export default function Footer() {


//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-primary-blue-color dark:bg-gray-900">
//       <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
//         <div className="md:flex md:justify-between items-start">
//           <div className="mb-6 md:mb-0">
//             <a href="https://IJDIII.com/" onClick={scrollToTop} className="flex items-center mb-5 gap-2 "> 
//               <img className="drop-shadow h-12 cursor-pointer" src="logo/logo.png" alt=""/>
//               <span className="self-center text-3xl font-semibold whitespace-nowrap text-white cursor-pointer">IJDIII</span>
//             </a>
//             <div className="flex items-center gap-4 mb-2 text-white dark:text-gray-400 font-medium list-disc">
//               <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
//                 <path stroke="none" d="M0 0h24v24H0z"/>  
//                 <rect x="3" y="5" width="18" height="14" rx="2" />  
//                 <polyline points="3 7 12 13 21 7" />
//               </svg>
//               <a href='mailto:editor@IJDIII.com' className='hover:underline'><h1>editor@IJDIII.com</h1></a>
//             </div>
//             <div className="flex items-center gap-4 text-white dark:text-gray-400 font-medium list-disc">
//               <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
//                 <path stroke="none" d="M0 0h24v24H0z"/>  
//                 <circle cx="12" cy="12" r="9" />  
//                 <line x1="3.6" y1="9" x2="20.4" y2="9" />  
//                 <line x1="3.6" y1="15" x2="20.4" y2="15" />  
//                 <path d="M11.5 3a17 17 0 0 0 0 18" />  
//                 <path d="M12.5 3a17 17 0 0 1 0 18" />
//               </svg>
//               <a href='https://IJDIII.com/' className='hover:underline' ><h1>www.IJDIII.com</h1></a>
//             </div>
//           </div>
//           <div className="grid sm:grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
//             <div>
//               <h2 className="mb-2 text-lg underline underline-offset-4 font-semibold text-white uppercase dark:text-white">Resources</h2>
//               <ul className="text-white dark:text-gray-400 font-medium">
//                 <li className="">
//                   <Link to="/"  onClick={scrollToTop} className="hover:underline">Home</Link>
//                 </li>
//                 <li className="">
//                   <Link to="/aboutus" onClick={scrollToTop} className="hover:underline">About Us</Link>
//                 </li>
//                 <li className="">
//                   <Link to="/contactus" onClick={scrollToTop} className="hover:underline">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="mb-2 text-lg font-semibold  underline underline-offset-4  text-white uppercase dark:text-white">Journal Overview</h2>
//               <ul className="text-white dark:text-gray-400 font-medium">
//                 <li><Link to="/editorial-board" onClick={scrollToTop} className="hover:underline mb-2">Editorial Board</Link></li>
//                 <li><Link to="/peerreview" onClick={scrollToTop} className="hover:underline mb-2">Peer Review Process</Link></li>
//                 <li><Link to="/publicationethic" onClick={scrollToTop} className="hover:underline mb-2">Publication Ethics</Link></li>
//                 <li><Link to="/abstracting" onClick={scrollToTop} className="hover:underline mb-2">Abstracting and Indexing</Link></li>
//                 <li><Link to="/articleProcess" onClick={scrollToTop} className="hover:underline mb-2">Article Processing Charges</Link></li>
//                 {/* <li><Link to="/journalreport" className="hover:underline mb-2">Journal Reports</Link></li> */}
//               </ul>
//             </div>
//             {/* <div>
//               <h2 className="mb-2 text-lg font-semibold  underline underline-offset-4  text-white uppercase dark:text-white">Special Issues</h2>
//               <ul className="text-white dark:text-gray-400 font-medium">
//                 <li><Link to="/publishspecial" className="hover:underline mb-2">Published Special Issues</Link></li>
//                 <li><Link to="/proposespecial" className="hover:underline mb-2">Propose Special Issue</Link></li>
//                 <li><Link to="/aboutspecial" className="hover:underline mb-2">About Special Issues</Link></li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//         <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5 relative" />

//         <div className=" text-center p-2  ">
//           <span className="text-sm  text-white dark:text-gray-400 ">© 2024 <a  onClick={scrollToTop} href="https://IJDIII.com/" className="hover:underline">IJDIII™</a>. All Rights Reserved.
//           </span>

//       </div>
//     </div>
//     <div className='relative'><a href="https://IJDIII.com/aritms/index.php/IJDIII/about/submissions"><img src="logo/ojs_brand.png" alt="" className='drop-shadow-[] h-16 absolute right-10 bottom-20 md:bottom-2 2xl:right-80'/></a></div>
// </footer>


//   );
// }




import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className=" mx-auto px-5 max-w-[97rem]  " >
        <div className="grid grid-cols-1   md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-2">IJDIII </h4>
            <p>Email: <a href="mailto:editor@IJDIII.com" className="text-blue-400">editor@ijdiii.com</a></p>
            <p>Website: <a href="https://www.IJDIII.com" className="text-blue-400">www.ijdiii.com</a></p>
          </div>

          {/* Navigation Links */}
          <div className='lg:mx-auto lg:text-center'>
            <h4 className="text-xl font-bold mb-2">Resources</h4>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/aboutus" className="hover:underline">About Us</a></li>
              <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>


          <div className='lg:ml-auto lg:text-right '>
            <h4 className="text-xl font-bold mb-2">Journal Overview</h4>
            <ul>
              <li><a href="/editorial-board" className="hover:underline">Editorial Board</a></li>
              <li><a href="/peerreview" className="hover:underline">Peer Review Process</a></li>
              <li><a href="/publicationethic" className="hover:underline">Publication Ethics</a></li>
              <li><a href="/abstracting" className="hover:underline">Abstracting and Indexing</a></li>
              <li><a href="/articleProcess" className="hover:underline">Article Processing Charges</a></li>
            </ul>
          </div>

        </div>
        <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        <div className='grid lg:grid-cols-3 grid-cols-1  items-center mt-5'>

          <div>
          </div>
          <div className="text-center lg:mb-0 mb-5">
            <p>© 2024 IJDIII. All Rights Reserved.</p>
          </div>
          <div>
            <img className='ml-auto w-24' src="/images/Herosection/OJS.png" alt="ojs" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
