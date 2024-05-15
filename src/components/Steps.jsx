import React from 'react'
import asset66 from "../assets/asset 66.svg"
import { IoCheckmarkDone } from "react-icons/io5";

const Steps = () => {
  return (
    <div id="steps" className="flex flex-col gap-6 container mt-20">
    <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
    <div id="step1" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 1</span>
            <h3 className="text-4xl">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
            <ul className="grid grid-cols-2 gap-2">
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
            </ul>
        </div>
        <div className="pt-12">
            <img src={asset66} alt="" />
        </div>
    </div>
    <div id="step2" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 2</span>
            <h3 className="text-4xl">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
            <ul className="grid grid-cols-2 gap-2">
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
            </ul>
        </div>
        <div className="pt-12">
            <img src={asset66} alt="" />
        </div>
    </div>
    <div id="step3" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 3</span>
            <h3 className="text-4xl">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
            <ul className="grid grid-cols-2 gap-2">
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
                <li className="flex gap-4">
                    <IoCheckmarkDone />

                    <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                </li>
            </ul>
        </div>
        <div className="pt-12">
            <img src={asset66} alt="" />
        </div>
    </div>
</div>
  )
}

export default Steps