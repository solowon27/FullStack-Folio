import React from "react";

import resume from '../Images/resume.pdf';

function Resume () {
    return (
    <section id="resume" className="container mx-auto flex justify-center">

<div className="relative">
  <div className="absolute inset-1 text-lime-400 rounded-lg blur-xl "></div>
<button className="relative px-7 py-4 bg-gray-800 rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
</span>
            <span className="text-gray-100">
            <a href= {resume} className ="mr-10 mt-10" download>
              Download resume
              </a>
              </span>
              
            <span className="text-lime-400">
            <a href= { resume } className="mr-10 mt-10 relative group" target="_blank">
              View resume
              </a>
              </span>            
      </button>
            
</div>
    </section>
    );
}

export default Resume;