import React from 'react'
import asset0 from "../assets/asset0.png"
import asset1 from "../assets/asset 1.svg"
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";



const Navbar = () => {

const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}
  return (
    
    <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
            <img className="object-cover max-w-12 max-h-12" src={asset0} alt="Logo"/>
            
            <span className="text-lg font-medium font-display">ToDesktop</span>
        </a>
        <div id="nav-menu" className="hidden lg:flex gap-12">
            <a href="#" className="font-medium hover:text-primary">Pricing</a>
            <a href="#" className="font-medium hover:text-primary">Docs</a>
            <a href="#" className="font-medium hover:text-primary">Changelog</a>
            <a href="#" className="font-medium hover:text-primary">Blogs</a>
            <a href="#" className="font-medium hover:text-primary">Login</a>
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
            <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
                <img src={asset1} alt="" />
                <span className="font-display font-medium">ReactJS Developers</span>
                <MdOutlineSubdirectoryArrowRight />

            </button>
        </div>
        

        <button className="p-2 lg:hidden" onClick={handleMenu} >
        <FaBars />
        </button>

        <div id="nav-dialog" className="hidden fixed z-10 md:hidden bg-white inset-0 p-3">
            <div id="nav-bar" className="flex justify-between">
                <a href="#" id="brand" className="flex gap-2 items-center">
                    <img className="object-cover max-w-12 max-h-12"  src={asset0} alt="Logo" />
                    <span className="text-lg font-medium font-display">ToDesktop</span>
                </a>
                <button className="p-2 md:hidden" onClick={handleMenu}>
                <FaXmark />
                </button>
            </div>
            <div className="mt-6">
                <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Pricing</a>
                <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Docs</a>
                <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Changelog</a>
                <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Blogs</a>
                <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Login</a>

            </div>
            <div className="h-[1px] bg-gray-300"></div>
            <button className="mt-6 w-full flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-50">
                <img src="./assets/asset 1.svg" alt="" />
                <span>ReactJs Developers</span>
            </button>
        </div>

    </nav>
  )
}

export default Navbar