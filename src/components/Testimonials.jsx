import React from 'react';
import asset44 from "../assets/asset 44.svg";
import asset45 from "../assets/asset 45.jpeg";
import asset46 from "../assets/asset 46.png";
import asset47 from "../assets/asset 47.png";
import asset48 from "../assets/asset 48.jpeg";
import { IoMdCheckmark } from "react-icons/io";


const Testimonials = () => {
  return (
<div id="testimonials" className="container">
    <h2 className="text-5xl sm:font-semibold mb-14">Customer stories</h2>
    <div className="rounded-xl border flex flex-col lg:flex-row items-end">
        <div className="flex flex-col gap-12 p-8">
            <div className="h-4 w-fit">
                <img src={asset44} alt="" />
            </div>
            <h3 className="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
            <div id="tag-container" className="flex gap-3 flex-wrap">
                <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <IoMdCheckmark />

                    <span className="font-display font-medium">Chromeless UI</span>
                </div>
                <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <IoMdCheckmark />

                    <span className="font-display font-medium">Native spellcheck</span>
                </div>
                <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <IoMdCheckmark />

                    <span className="font-display font-medium">Task time in menubar</span>
                </div>
                <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <IoMdCheckmark />

                    <span className="font-display font-medium">Notification count in the dock</span>
                </div>
                <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <IoMdCheckmark />

                    <span className="font-display font-medium">Global hotkey to create task</span>
                </div>
            </div>
            <p className="text-lg font-light text-gray-500">“ToDesktop provided us with a <span className="text-gray-800">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className="text-gray-800">new and improved features</span> to our customers within days.”</p>
            <div id="user-card" className="flex gap-4">
                <div className="w-12">
                    <img src={asset45} className="rounded-full" alt="" />
                </div>
                <div className="flex flex-col">
                    <h3>Zeb Evans</h3>
                    <p className="text-gray-500">Founder & CEO, <a href="#" className="anchor-hover">ClickUp</a> </p>
                </div>
            </div>
        </div>
        <div className="">
            <img src={asset46} className="pl-12" alt=""/>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
<div className="rounded-2xl gradient-hover-outer group">
    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code text-indigo-800"></i>
            </div>
            <h3 className="text-2xl font-semibold">Native APIs</h3>
        </div>
        <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we have crafted an exceptionally polished desktop user experience.</p>
        <div className="flex gap-4">
            <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                    <img src={asset47} className="min-w-16 min-h-16" alt="" />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                    <img src={asset48} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <h3>Rick Pastoor</h3>
                <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
            </div>
        </div>
        
    </div>
    
</div>
<div className="rounded-2xl gradient-hover-outer group">
    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code text-indigo-800"></i>
            </div>
            <h3 className="text-2xl font-semibold">Native APIs</h3>
        </div>
        <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we have crafted an exceptionally polished desktop user experience.</p>
        <div className="flex gap-4">
            <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                    <img src={asset47} className="min-w-16 min-h-16" alt=""/>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                    <img src={asset48} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <h3>Rick Pastoor</h3>
                <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
            </div>
        </div>
        
    </div>
    
</div>
<div className="rounded-2xl gradient-hover-outer group">
    <div className="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code text-indigo-800"></i>
            </div>
            <h3 className="text-2xl font-semibold">Native APIs</h3>
        </div>
        <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we have crafted an exceptionally polished desktop user experience.</p>
        <div className="flex gap-4">
            <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                    <img src={asset47} className="min-w-16 min-h-16" alt=""/>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                    <img src={asset48} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <h3>Rick Pastoor</h3>
                <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
            </div>
        </div>
        
    </div>
    
</div>
</div>
    <div className="rounded-2xl flex flex-col bg-black lg:flex-row mt-12 pt-6 lg:pt-10">
        <div className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
            <span className="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
            <h2 className="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
            <p className="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
            <button className="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                <i className="fa-solid fa-download "></i>
                <span>Download ToDestop Builder</span>
            </button>
            <p className="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
        </div>
        <div className="lg:w-1/2">
            <img src={asset46} className="pl-12" alt=""/>
        </div>
    </div>

</div>

  )
}

export default Testimonials



