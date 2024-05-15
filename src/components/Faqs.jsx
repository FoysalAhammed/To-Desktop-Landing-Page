import React from 'react'
import { FaChevronUp } from "react-icons/fa";

const Faqs = () => {

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})
  return (
    <div id="faq" className="container">
    <h2 className="h2-style">FAQs</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq-1">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-1" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
        <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="flex justify-between items-center" aria-controls="faq-2">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-2" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
        <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq-3">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-3" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
        <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="flex justify-between items-center" aria-controls="faq-4">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-4" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
        <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq-5">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-5" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
        <div className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt className="flex justify-between items-center" aria-controls="faq-6">
                <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
              <FaChevronUp />

            </dt>
            <dd id="faq-6" className="hidden text-lg font-light mt-6">
                <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
            </dd>
        </div>
    </div>
</div>
  )
}

export default Faqs