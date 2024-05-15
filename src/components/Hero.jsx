import React from 'react';
import asset1 from "../assets/asset 1.svg";
import asset2 from "../assets/asset 2.svg";
import asset3 from "../assets/asset 3.png";
import asset4 from "../assets/asset 4.png";
import asset5 from "../assets/asset 5.png";
import asset6 from "../assets/asset 6.png";
import asset7 from "../assets/asset 7.png";
import asset8 from "../assets/asset 8.png";
import asset9 from "../assets/asset 9.png";
import asset10 from "../assets/asset 10.png";
import asset11 from "../assets/asset 11.png";
import asset12 from "../assets/asset 12.png";
import asset13 from "../assets/asset 13.png";
import asset14 from "../assets/asset 14.png";
import asset15 from "../assets/asset 15.png";
import asset16 from "../assets/asset 16.png";
import asset17 from "../assets/asset 17.png";
import asset18 from "../assets/asset 18.png";
import asset19 from "../assets/asset 19.png";
import asset20 from "../assets/asset 20.png";
import asset21 from "../assets/asset 21.png";
import asset22 from "../assets/asset 22.png";
import asset23 from "../assets/asset 23.png";
import asset24 from "../assets/asset 24.png";
import asset25 from "../assets/asset 25.png";
import asset26 from "../assets/asset 26.png";

const Hero = () => {
  return (
   
    <div id="hero" className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
    <div id="hero-container" className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
         <div id="version-text" className="flex items-center my-6 gap-2 border border-yellow-300 
         bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
             <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
             <p className="font-display font-medium text-yellow-600">v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span></p>
             <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
         </div>
         <div id="hero-features" className="hidden sm:flex gap-8 my-6">
             <div className="flex justify-center gap-2 items-center text-gray-500">
                 <i className="fa-regular fa-file-code text-sm"></i>
                 <p>Code Optional</p>
             </div>
             <div className="flex justify-center gap-2 items-center text-gray-500">
                 <i className="fa-solid fa-hand-back-fist"></i>
                 <p>Drag & drop builder</p>
             </div>
             <div className="flex justify-center gap-2 items-center text-gray-500">
                 <i className="fa-solid fa-laptop"></i>
                 <p>Windows, Mac, Linux</p>
             </div>
         </div>
         <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">Web app to desktop app in minutes</h1>
         <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
         <div id="buttons-container" className="mt-12 flex gap-4 flex-col sm:flex-row">
             <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-600 shadow-sm hover:bg-opacity-90">Download now</button>
             <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
         </div>
    </div>
    <div id="companies-container" className="flex flex-col gap-10">
         <div id="companies-title" className="flex justify-center gap-2">
             <img className="translate-y-2" src={asset2} alt=""/>
             <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
             <img className="-scale-x-100 translate-y-2" src={asset2} alt=""/>
         </div>
         <div id="lines-group" className="flex flex-col gap-4">
             <div id="line1" className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset3} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset4} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset5} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Convy</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset6} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset7} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset8} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Rise</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset9} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset10} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Notion</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset11} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset12} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset13} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Cal</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset14} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
                 </div>
                 
             </div>
             <div id="line2" className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset15} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset16} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset17} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset18} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset19} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset20} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Moises</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset21} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Basedash</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset22} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Cursor</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset23} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Linear</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset24} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Voiceflow</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset25} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Kitemaker</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset26} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Cron</span>
                 </div>
             </div>
             <div id="line3" className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset15} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset16} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset17} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset13}className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset20}className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset24}className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset13} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset14} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset19} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset23} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset11} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
                 <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                     <img src={asset18} className="w-12 h-12 md:w-16 md:h-16" alt="" />
                     <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                 </div>
             </div>
         </div>
    </div>
 </div>
  )
}

export default Hero