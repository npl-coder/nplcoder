"use client"

import CodeBlock from './Codeblock';
import React from 'react';
import Initiatives from './Initiatives';
import Register from './Register'

const Hero = () => {
  return (
    <main className="relative bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c] p-8">
    <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-[140px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="flex-1 text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white tracking-tight mb-6">
            Empowering the{' '}
            <span className="bg-gradient-to-r from-[#DC143C] to-[#003893] text-transparent bg-clip-text">
              Next Generation
            </span>{' '}
            of Nepali Computational Minds.
          </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl">
            NPLCoder is a non-profit organization dedicated to empowering Nepalese students in computing and innovation. We provide resources, mentorship, and opportunities to nurture talent that will drive global change while proudly representing Nepal, blending the nation's rich heritage with technology.            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="p-8 bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6">
Join Our Initiative </button>            
<a href="/about">
<button className="p-8 bg-transparent 0 border hover:scale-105 border-gray-600 text-gray-800 dark:text-white hover:bg-white/10 py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6">

    About Us
  </button>
  </a>
</div>


<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
  <div className="flex items-center gap-4">
    <div className="flex -space-x-3">
      {[
        "./images/discord-avatar1.png",
        "./images/discord-avatar2.png",
        "./images/discord-avatar.png",
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`User ${i + 1}`}
          className="w-10 h-10 rounded-full border-2 border-[#2C3043] object-cover"
        />
      ))}
    </div>
    <span className="text-gray-800 hidden lg:flex dark:text-white font-medium">+120 users</span>

    <div className="h-8 w-[1px] bg-gray-700  sm:block" />

    <p className="text-gray-600 dark:text-gray-400 dark:hover:text-white flex items-center gap-2 hover:scale-110 transition-all duration-200 cursor-pointer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.317 4.369a19.791 19.791 0 0 0-4.884-1.528.075.075 0 0 0-.079.037c-.211.375-.447.864-.608 1.25-1.844-.276-3.68-.276-5.486 0-.162-.4-.41-.875-.625-1.25a.075.075 0 0 0-.079-.037A19.736 19.736 0 0 0 3.68 4.369a.07.07 0 0 0-.032.027C.533 9.174-.319 13.874.098 18.511a.081.081 0 0 0 .031.052A19.933 19.933 0 0 0 6.184 21.95a.076.076 0 0 0 .082-.027c.631-.86 1.18-1.767 1.641-2.695a.076.076 0 0 0-.041-.104 13.06 13.06 0 0 1-1.884-.905.076.076 0 0 1-.008-.125c.126-.094.252-.193.373-.295a.075.075 0 0 1 .077-.01c3.952 1.803 8.228 1.803 12.11 0a.075.075 0 0 1 .078.009c.12.102.247.201.374.295a.076.076 0 0 1-.007.125c-.597.35-1.244.657-1.887.905a.076.076 0 0 0-.04.104c.483.928 1.033 1.835 1.641 2.695a.076.076 0 0 0 .082.027 19.89 19.89 0 0 0 6.055-2.908.077.077 0 0 0 .031-.052c.5-5.14-.823-9.795-3.55-14.115a.075.075 0 0 0-.031-.026ZM9.02 15.403c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Zm5.958 0c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Z"
        fill="currentColor"
      />
    </svg>
    <a href="https://discord.gg/kJrvdhmzVd" target="_blank" rel="noreferrer">
      Join our Discord
    </a>
  </p>
  </div>


 
</div>

          </div>

          <div className="flex-1 relative w-full">
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-lg p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
               <CodeBlock/>
              </div>
              <div className="space-y-4">

                       </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );}
  export default  Hero;