import React from 'react'
import asset37 from "../assets/asset 37.png";
import asset38 from "../assets/asset 38.png";
import asset39 from "../assets/asset 39.png";
import asset40 from "../assets/asset 40.png";
const BentoGrid = () => {
  return (
             <div id="bento-grid" className="container">
            <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">ToDesktop handles the details</h2>
            <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3 auto-rows-[96px] " >
                <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
                    <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center ">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset37} alt="" />
                    </div>
                </div>
                <div className="row-start-1 row-end-4 group rounded-2xl gradient-hover-outer">
                    <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <p className="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38} alt="" />
                    </div>
                </div>
                <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
                    <div className="gradient-hover-inner rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset39} alt="" />
                    </div>
                </div>
                <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <p className="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset40} alt="" />
                    </div>
                </div>
                <div className="row-start-4 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset37} alt=""/>
                    </div>
                </div>
                <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <p className="text-lg text-center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38} alt=""/>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default BentoGrid