"use client"

import React, { useEffect, useRef } from 'react';

const Initiatives = () => {
  const initiatives = [
    {
      title: "NPLAlgo",
      description: "NPLAlgo is dedicated to fostering a vibrant competitive programming culture in Nepal. It spearheads the Nepal Olympiad in Informatics (NOI), preparing students for prestigious international contests like the International Olympiad in Informatics (IOI). Additionally, NPLAlgo organizes weekly and monthly programming contests to enhance problem-solving skills, featuring algorithmic challenges that help participants excel in platforms like Codeforces and AtCoder. Through mentorship, practice sessions, and competitions, NPLAlgo aims to build a strong community of Nepali competitive programmers ready to tackle global challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      url: "nplalgo",
      visual: (canvasRef) => (
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-20 h-16 bg-[#003893]/20 dark:bg-[#003893]/30 backdrop-blur-sm rounded-md transform rotate-12 animate-float-slow hover:scale-110 transition-transform cursor-pointer group">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center text-xs text-[#003893] dark:text-white">for(i=0;i&lt;n;i++)</div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-24 h-12 bg-[#DC143C]/20 dark:bg-[#DC143C]/30 backdrop-blur-sm rounded-md transform -rotate-6 animate-float-slow-reverse hover:scale-110 transition-transform cursor-pointer group">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center text-xs text-[#DC143C] dark:text-white">while(left&lt;right)</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 backdrop-blur-sm rounded-md transform rotate-45 animate-float hover:scale-110 transition-transform cursor-pointer group">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center text-xs text-gray-700 dark:text-white transform -rotate-45">if(a[mid]==key)</div>
          </div>
          
          <div className="absolute left-2/3 top-2/3 w-1/4 h-1/4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-end justify-around">
                {[0.3, 0.7, 0.5, 0.9, 0.4, 0.6, 0.8].map((height, i) => (
                  <div 
                    key={i} 
                    className={`w-2 bg-gradient-to-t from-[#003893] to-[#DC143C] rounded-t-sm transition-all duration-500 ease-in-out hover:from-[#DC143C] hover:to-[#003893]`}
                    style={{height: `${height * 100}%`}}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* "Code" lines with typewriter effect */}
          <div className="absolute inset-x-8 top-12 h-1 bg-gradient-to-r from-[#003893] to-transparent rounded w-0 animate-expand-slow"></div>
          <div className="absolute inset-x-12 top-20 h-1 bg-gradient-to-r from-[#003893] to-transparent rounded w-0 animate-expand-slower"></div>
          <div className="absolute inset-x-16 top-28 h-1 bg-gradient-to-r from-[#003893] to-transparent rounded w-0 animate-expand-slowest"></div>
          <div className="absolute inset-x-20 top-36 h-1 bg-gradient-to-r from-[#DC143C] to-transparent rounded w-0 animate-expand-slow"></div>
          <div className="absolute inset-x-12 bottom-28 h-1 bg-gradient-to-r from-[#DC143C] to-transparent rounded w-0 animate-expand-slower"></div>
          <div className="absolute inset-x-8 bottom-20 h-1 bg-gradient-to-r from-[#DC143C] to-transparent rounded w-0 animate-expand-slowest"></div>

          {/* Binary tree visualization */}
          <div className="absolute left-1/2 top-16 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse"></div>
          <div className="absolute left-1/3 top-1/3 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed"></div>
          <div className="absolute left-2/3 top-1/3 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed"></div>
          <div className="absolute left-1/4 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
          <div className="absolute left-2/5 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
          <div className="absolute left-3/5 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
          <div className="absolute left-3/4 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
          
          {/* Tree connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="18" x2="33.3%" y2="33.3%" className="animate-draw-line" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="18" x2="66.7%" y2="33.3%" className="animate-draw-line-delayed" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="33.3%" y1="33.3%" x2="25%" y2="50%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="33.3%" y1="33.3%" x2="40%" y2="50%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="66.7%" y1="33.3%" x2="60%" y2="50%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="66.7%" y1="33.3%" x2="75%" y2="50%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003893" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#DC143C" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Interactive canvas for algorithm visualization would be drawn here using the ref */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        </div>
      )
    },
    {
      title: "NPLNeural",
      description: "NPLNeural is dedicated to building a collaborative community for undergraduate students in Nepal to explore AI, data science, and machine learning. Through monthly AI competitions and hackathons, we create opportunities for students to work together, tackle real-world challenges, and enhance their technical skills. By connecting aspiring AI researchers and practitioners, NPLNeural fosters innovation, teamwork, and hands-on problem-solving. Our platform not only prepares students for industry-relevant AI challenges but also exposes them to global competitive programming arenas, helping them compete and excel on the world stage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      ),
      url: "/nplneural",
    
      visual: (canvasRef) => (
        <div className="relative w-full h-full overflow-hidden ">
          {/* Interactive neural network visualization */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
            {/* Connection lines - Positioned first to be in the background */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#003893" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#DC143C" stopOpacity="0.5" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Input to Hidden Layer 1 connections */}
              <g className="opacity-70">
                {/* Input node 1 to all hidden layer 1 nodes */}
                <path d="M 0 25 L 33 16" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 25 L 33 32" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 25 L 33 48" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 25 L 33 64" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 25 L 33 80" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                {/* Input node 2 to all hidden layer 1 nodes */}
                <path d="M 0 50 L 33 16" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 50 L 33 32" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 50 L 33 48" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 50 L 33 64" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 50 L 33 80" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                {/* Input node 3 to all hidden layer 1 nodes */}
                <path d="M 0 75 L 33 16" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 75 L 33 32" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 75 L 33 48" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 75 L 33 64" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 0 75 L 33 80" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                {/* Hidden Layer 1 to Hidden Layer 2 connections */}
                {/* Each node in hidden layer 1 connects to each node in hidden layer 2 */}
                <path d="M 33 16 L 66 25" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 16 L 66 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 16 L 66 75" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                <path d="M 33 32 L 66 25" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 32 L 66 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 32 L 66 75" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                <path d="M 33 48 L 66 25" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 48 L 66 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 48 L 66 75" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                <path d="M 33 64 L 66 25" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 64 L 66 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 64 L 66 75" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                <path d="M 33 80 L 66 25" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 80 L 66 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 33 80 L 66 75" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                
                {/* Hidden Layer 2 to Output connections */}
                <path d="M 66 25 L 100 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 66 50 L 100 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
                <path d="M 66 75 L 100 50" stroke="url(#neuralGradient)" strokeWidth="1.5" className="animate-pulse" />
              </g>
    
              {/* Animated signal paths for data flow visualization */}
              <g className="signal-paths" filter="url(#glow)">
                <circle r="2" className="animate-neural-signal">
                  <animateMotion 
                    path="M 0 25 L 33 48 L 66 50 L 100 50" 
                    dur="2s" 
                    repeatCount="indefinite" 
                    begin="0s"
                  />
                </circle>
                <circle r="2" className="animate-neural-signal">
                  <animateMotion 
                    path="M 0 75 L 33 80 L 66 75 L 100 50" 
                    dur="2.2s" 
                    repeatCount="indefinite" 
                    begin="0.5s"
                  />
                </circle>
                <circle r="2" className="animate-neural-signal">
                  <animateMotion 
                    path="M 0 50 L 33 32 L 66 25 L 100 50" 
                    dur="1.8s" 
                    repeatCount="indefinite" 
                    begin="1s"
                  />
                </circle>
              </g>
            </svg>
            
            {/* Input layer */}
            <div className="absolute left-0 top-1/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50"></div>
            <div className="absolute left-0 top-2/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50"></div>
            <div className="absolute left-0 top-3/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50"></div>
            
            {/* Hidden layer 1 */}
            <div className="absolute left-1/3 top-[16%] w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50"></div>
            <div className="absolute left-1/3 top-[32%] w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50"></div>
            <div className="absolute left-1/3 top-[48%] w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50 animate-pulse"></div>
            <div className="absolute left-1/3 top-[64%] w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50"></div>
            <div className="absolute left-1/3 top-[80%] w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50"></div>
            
            {/* Hidden layer 2 */}
            <div className="absolute left-2/3 top-1/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50"></div>
            <div className="absolute left-2/3 top-2/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50 animate-pulse"></div>
            <div className="absolute left-2/3 top-3/4 w-5 h-5 rounded-full bg-[#003893] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-blue-500/50"></div>
            
            {/* Output layer */}
            <div className="absolute right-0 top-2/4 w-5 h-5 rounded-full bg-[#DC143C] hover:scale-150 hover:z-10 transition-transform cursor-pointer shadow-lg shadow-red-500/50 animate-pulse"></div>
            
            {/* Interactive "firing" neurons */}
            <div className="absolute left-1/3 top-[48%] w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#DC143C] opacity-30 animate-ping"></div>
            <div className="absolute left-2/3 top-2/4 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#003893] opacity-30 animate-ping animation-delay-500"></div>
            <div className="absolute right-0 top-2/4 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#DC143C] opacity-30 animate-ping animation-delay-1000"></div>
          </div>
          
          {/* Neural wave patterns */}
          <div className="absolute top-5 left-5 w-20 h-10">
            <svg className="w-full h-full" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,25 Q10,5 20,25 T40,25 T60,25 T80,25 T100,25" stroke="#003893" fill="none" strokeWidth="2" className="animate-wave" />
            </svg>
          </div>
          <div className="absolute bottom-5 right-5 w-20 h-10">
            <svg className="w-full h-full" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,25 Q10,45 20,25 T40,25 T60,25 T80,25 T100,25" stroke="#DC143C" fill="none" strokeWidth="2" className="animate-wave-reverse" />
            </svg>
          </div>
          
         
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        </div>
      )
    },
    {
      title: "NPLCareer",
      description: "NPLCareer is committed to career guidance and professional development for Nepali students in computer science, both within Nepal and abroad, particularly in the U.S. It provides resources on internship opportunities, job applications, technical interviews, resume building, and networking. NPLCareer also hosts mentorship programs, industry talks, and career workshops, helping students successfully transition from academia to top tech companies, research labs, and startups.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      url: "nplcareer",
      visual: (canvasRef) => (
        <div className="relative w-full h-full">
          {/*Career ladder*/}
          <div className="absolute left-1/6 bottom-1/6 w-2/3 h-2/3 flex flex-col justify-between perspective-800">
            <div className="h-1/5 w-full bg-gradient-to-r from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 rounded-md border border-[#003893]/20 dark:border-[#003893]/40 flex items-center justify-center transform hover:translate-z-10 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#DC143C] dark:group-hover:text-white transition-colors">Leadership</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003893]/0 to-[#DC143C]/0 group-hover:from-[#003893]/10 group-hover:to-[#DC143C]/20 transition-all duration-300 rounded-md"></div>
            </div>
            <div className="h-1/5 w-11/12 mx-auto bg-gradient-to-r from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 rounded-md border border-[#003893]/20 dark:border-[#003893]/40 flex items-center justify-center transform hover:translate-z-8 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#DC143C] dark:group-hover:text-white transition-colors">Senior</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003893]/0 to-[#DC143C]/0 group-hover:from-[#003893]/10 group-hover:to-[#DC143C]/20 transition-all duration-300 rounded-md"></div>
            </div>
            <div className="h-1/5 w-10/12 mx-auto bg-gradient-to-r from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 rounded-md border border-[#003893]/20 dark:border-[#003893]/40 flex items-center justify-center transform hover:translate-z-6 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#DC143C] dark:group-hover:text-white transition-colors">Mid-level</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003893]/0 to-[#DC143C]/0 group-hover:from-[#003893]/10 group-hover:to-[#DC143C]/20 transition-all duration-300 rounded-md"></div>
            </div>
            <div className="h-1/5 w-9/12 mx-auto bg-gradient-to-r from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 rounded-md border border-[#003893]/20 dark:border-[#003893]/40 flex items-center justify-center transform hover:translate-z-4 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#DC143C] dark:group-hover:text-white transition-colors">Junior</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003893]/0 to-[#DC143C]/0 group-hover:from-[#003893]/10 group-hover:to-[#DC143C]/20 transition-all duration-300 rounded-md"></div>
            </div>
            <div className="h-1/5 w-8/12 mx-auto bg-gradient-to-r from-[#003893]/10 to-[#DC143C]/10 dark:from-[#003893]/20 dark:to-[#DC143C]/20 rounded-md border border-[#003893]/20 dark:border-[#003893]/40 flex items-center justify-center transform hover:translate-z-2 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#DC143C] dark:group-hover:text-white transition-colors">Internship</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003893]/0 to-[#DC143C]/0 group-hover:from-[#003893]/10 group-hover:to-[#DC143C]/20 transition-all duration-300 rounded-md"></div>
            </div>
          </div>
          
          <svg className="absolute left-1/6 bottom-1/6 w-2/3 h-2/3 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="careerGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#003893" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#DC143C" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <line x1="40%" y1="80%" x2="45%" y2="64%" stroke="url(#careerGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-dash" />
            <line x1="45%" y1="64%" x2="50%" y2="48%" stroke="url(#careerGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-dash-reverse" />
            <line x1="50%" y1="48%" x2="55%" y2="32%" stroke="url(#careerGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-dash" />
            <line x1="55%" y1="32%" x2="50%" y2="16%" stroke="url(#careerGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-dash-reverse" />
          </svg>
          
         
          <div className="absolute top-1/6 right-1/6 w-12 h-12 rounded-full border-2 border-dashed border-[#DC143C]/40 animate-spin-slow cursor-pointer hover:border-[#DC143C]/80 transition-colors"></div>
          <div className="absolute top-1/3 left-1/6 w-8 h-8 rounded-full border-2 border-dashed border-[#003893]/40 animate-spin-slow-reverse cursor-pointer hover:border-[#003893]/80 transition-colors"></div>
          
          {/* resume document */}
          <div className="absolute bottom-5 right-5 w-1/4 h-1/4 bg-white dark:bg-gray-800 rounded shadow-md transform rotate-6 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
            <div className="p-1 flex flex-col h-full">
              <div className="w-full h-2 bg-[#003893] mb-1 rounded-sm"></div>
              <div className="flex gap-1 mb-1">
                <div className="w-1/3 h-1 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
              </div>
              <div className="flex gap-1 mb-1">
                <div className="w-1/4 h-1 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                <div className="w-2/3 h-1 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
              </div>
              <div className="flex-1 border-t border-gray-200 dark:border-gray-700 mt-1 pt-1">
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-sm mb-1"></div>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-sm mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        </div>
      )
    },
    {
      title: "NPLAcademia",
      description: "NPLAcademia is a mentorship-driven initiative designed to help Nepali students navigate the complex journey of applying to top graduate schools in the U.S. and beyond. It provides personalized mentorship, strategy sessions, application workshops, and networking opportunities to increase the representation of Nepali students in world-class research programs. With guidance on research experience, recommendation letters, statement of purpose writing, and funding opportunities, NPLAcademia aims to create a pipeline of Nepali scholars excelling in academia and research globally.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      url: "nplacademia",

      visual: (canvasRef) => (
        <div className="relative w-full h-full">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
            <div className="relative w-full h-full">
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-[#003893] to-[#DC143C] rounded hover:scale-105 transition-transform cursor-pointer"></div>
              
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-full w-20 h-20 bg-gradient-to-br from-[#003893] to-[#DC143C] transform rotate-45 origin-bottom-right hover:rotate-[50deg] transition-transform cursor-pointer"></div>
              
              <div className="absolute bottom-1/4 left-1/2 translate-x-6 w-1 h-12 bg-[#DC143C] origin-top transform rotate-6 hover:rotate-12 transition-transform"></div>
              <div className="absolute bottom-1/4 left-1/2 translate-x-6 translate-y-12 w-5 h-5 bg-[#003893] rounded-full animate-swing"></div>
              
              {/* Label */}
            </div>
          </div>
          
          <div className="absolute left-1/2 bottom-1/6 -translate-x-1/2 w-64 h-40 flex justify-center">
            <div className="relative w-full h-full flex flex-col items-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                {/* Paper 3 (bottom) */}
                <div className="w-32 h-40 bg-white dark:bg-gray-700 rounded-md shadow-lg transform -rotate-6 translate-x-3 translate-y-3">
                  <div className="w-full h-full p-3 flex flex-col">
                    <div className="w-full h-2 bg-[#003893]/50 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                  </div>
                </div>
                
                {/* Paper 2 (middle) */}
                <div className="w-32 h-40 bg-white dark:bg-gray-700 rounded-md shadow-lg transform -rotate-3 translate-x-1 translate-y-1 absolute top-0">
                  <div className="w-full h-full p-3 flex flex-col">
                    <div className="w-full h-2 bg-[#DC143C]/50 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                  </div>
                </div>
                
                {/* Paper 1 (top) */}
                <div className="w-32 h-40 bg-white dark:bg-gray-700 rounded-md shadow-lg absolute top-0 hover:rotate-3 hover:translate-y-1 transition-transform cursor-pointer">
                  <div className="w-full h-full p-3 flex flex-col">
                    <div className="w-full h-2 bg-[#003893]/50 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Research Tools - Right Side */}
          <div className="absolute right-1/6 top-1/2 -translate-y-1/2 w-32 h-32">
            {/* Microscope (larger) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-32 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
              <div className="w-10 h-2 bg-[#DC143C] rounded-t"></div>
              <div className="w-6 h-16 bg-[#DC143C]"></div>
              <div className="w-12 h-4 bg-[#DC143C] rounded-full"></div>
              <div className="w-14 h-2 bg-[#DC143C]"></div>
              <div className="w-10 h-6 bg-[#DC143C] rounded"></div>
            </div>
          </div>
          
          {/* Study Tools - Left Side */}
          <div className="absolute left-1/6 top-1/2 -translate-y-1/2 w-32 h-40">
            {/* Open book */}
            <div className="relative w-32 h-24 flex hover:scale-105 transition-transform cursor-pointer">
              {/* Left page */}
              <div className="w-1/2 h-full bg-white dark:bg-gray-700 rounded-l-md shadow-md transform origin-right hover:rotate-3 transition-transform flex flex-col p-2">
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-2/3 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
              </div>
              
              {/* Book spine */}
              <div className="h-full w-2 bg-gradient-to-r from-[#003893] to-[#DC143C]"></div>
              
              {/* Right page */}
              <div className="w-1/2 h-full bg-white dark:bg-gray-700 rounded-r-md shadow-md transform origin-left hover:rotate-[-3deg] transition-transform flex flex-col p-2">
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-2/3 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
                <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 mb-1"></div>
              </div>
            </div>
            
            {/* Label */}          </div>
          
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#DC143C]/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-[#003893]/20 rounded-full animate-float-slow-reverse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-[#DC143C]/20 rounded-full animate-float"></div>
          
          {/* Subtle connections in background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,40 Q30,38 40,45 T60,50 T80,45" stroke="#003893" fill="none" strokeWidth="0.5" />
              <path d="M30,30 Q40,28 50,35 T70,40 T90,35" stroke="#DC143C" fill="none" strokeWidth="0.5" />
              <path d="M25,50 Q35,48 45,55 T65,60 T85,55" stroke="#003893" fill="none" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Interactive canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>
        </div>
      )
    }
  ];

  const canvasRefs = useRef(initiatives.map(() => React.createRef()));
  
  useEffect(() => {
   
    initiatives.forEach((initiative, i) => {
      const canvas = canvasRefs.current[i];
      if (canvas && canvas.current) {
        initiative.visual(canvas.current);
      }
    });

   
  }, []);

  return (
    <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Our Initiatives
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg">
          Building the foundation for Nepal's digital future through these key programs designed to nurture and showcase computational talent.
        </p>
      </div>
  
      <div className="space-y-10">
        {initiatives.map((initiative, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-2 lg:gap-10 border-b border-gray-200 dark:border-gray-700 pb-20`}
          >
            <div className="w-full flex justify-center items-center lg:hidden mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#DC143C] to-[#003893] flex items-center justify-center text-white shadow-lg">
                {initiative.icon}
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>
            </div>
            
            <div className="flex-1 lg:w-3/5 lg:flex-none">
              <div className={`hidden lg:flex items-center gap-4 mb-8 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                {index % 2 === 1 && <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#DC143C] to-[#003893] flex items-center justify-center text-white shadow-lg">
                  {initiative.icon}
                </div>
                {index % 2 === 0 && <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>}
              </div>
              
              <div className={`${index % 2 === 0 ? 'text-left lg:text-lg' : 'text-left lg:text-right lg:text-lg'}`}>
                <p className="text-gray-600 dark:text-gray-300">
                  {initiative.description}
                </p>
                <a href={`/${initiative?.url}`}>
                <button className="mt-8 bg-transparent hover:bg-white/10 border border-gray-600 text-gray-800 dark:text-white py-2 px-6 rounded-xl font-medium hover:scale-105 transition-all duration-200">
                  Learn More
                </button>
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block flex-1 lg:w-2/5 lg:flex-none h-80">
              <div className="relative w-full h-full overflow-hidden">
                {initiative.visual(canvasRefs.current[index])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Initiatives;