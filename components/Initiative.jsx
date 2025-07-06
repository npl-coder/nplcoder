"use client"

import React, { useEffect, useRef } from 'react';

import { useTranslations } from 'next-intl';

const Initiatives = () => {

    const t = useTranslations('Initiatives');

  const initiatives = [
    {
      title: "NPLAlgo",
      description: t('nplalgo')
      ,icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      url: "#",
      visual: () => (
        <div className="relative w-full h-full flex items-center justify-center scale-125">
        {/* Binary tree nodes */}
        <div className="absolute left-1/2.2 top-[26%] -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse"></div>
      
        <div className="absolute left-[32%] top-[50%] -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed"></div>
        <div className="absolute left-[66%] top-[50%] -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed"></div>
      
        <div className="absolute left-[24%] top-[75%] -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
        <div className="absolute left-[39.5%] top-[75%] -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
        <div className="absolute left-[59%] top-[75%] -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
        <div className="absolute left-[74.4%] top-[75%] -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#003893] to-[#DC143C] animate-pulse-delayed-more"></div>
      
        {/* Tree connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#003893" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#DC143C" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <line x1="50%" y1="28%" x2="33.3%" y2="50%" className="animate-draw-line" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="50%" y1="28%" x2="66.7%" y2="50%" className="animate-draw-line-delayed" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="33.3%" y1="50%" x2="25%" y2="75%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="33.3%" y1="50%" x2="40%" y2="75%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="66.7%" y1="50%" x2="60%" y2="75%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="66.7%" y1="50%" x2="75%" y2="75%" className="animate-draw-line-delayed-more" stroke="url(#lineGradient)" strokeWidth="1.5" />
        </svg>
      </div>
      
      )
    },
    {
      title: "NPLNeural",
      description: t('nplneural'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      ),
      url: "#",
      visual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#003893" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#DC143C" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                    <g>
                        {/* Input to Hidden 1 */}
                        <path d="M 10 20 L 35 10" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 20 L 35 30" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 20 L 35 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 20 L 35 70" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 20 L 35 90" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 50 L 35 10" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 50 L 35 30" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 50 L 35 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 50 L 35 70" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 50 L 35 90" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 80 L 35 10" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 80 L 35 30" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 80 L 35 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 80 L 35 70" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 10 80 L 35 90" stroke="url(#neuralGradient)" strokeWidth="0.5" />

                        {/* Hidden 1 to Hidden 2 */}
                        <path d="M 35 10 L 65 25" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 10 L 65 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 10 L 65 75" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 30 L 65 25" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 30 L 65 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 30 L 65 75" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 50 L 65 25" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 50 L 65 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 50 L 65 75" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 70 L 65 25" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 70 L 65 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 70 L 65 75" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 90 L 65 25" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 90 L 65 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 35 90 L 65 75" stroke="url(#neuralGradient)" strokeWidth="0.5" />

                        {/* Hidden 2 to Output */}
                        <path d="M 65 25 L 90 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 65 50 L 90 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                        <path d="M 65 75 L 90 50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
                    </g>
                </svg>
                
                {/* Neuron Layers */}
                <div className="absolute left-[10%] top-[20%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[10%] top-[50%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[10%] top-[80%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[35%] top-[10%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
                <div className="absolute left-[35%] top-[30%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
                <div className="absolute left-[35%] top-[50%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
                <div className="absolute left-[35%] top-[70%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
                <div className="absolute left-[35%] top-[90%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
                <div className="absolute left-[65%] top-[25%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[65%] top-[50%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[65%] top-[75%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003893] shadow-lg"></div>
                <div className="absolute left-[90%] top-[50%] w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C] shadow-lg"></div>
            </div>
        </div>
      )
    },
    {
      title: "NPLCareer",
      description: t('nplcareer'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      url: "#",
      visual: () => (
        <div className="relative w-full h-full flex items-center justify-center">
  {/* resume document */}
  <div className="w-1/2 h-[70%] bg-white dark:bg-gray-800 rounded-lg shadow-xl transform rotate-6 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden">
    <div className="p-4 flex flex-col h-full">
      <p className='font-bold text-lg dark:text-gray-300 mb-2'>Resume</p>
      <div className="w-full h-3 bg-gradient-to-r from-[#003893] to-[#DC143C] mb-3 rounded-sm"></div>

      {/* Section 1: Header */}
      <div className="flex gap-2 mb-2">
        <div className="w-1/3 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
      </div>
      <div className="flex gap-2 mb-3">
        <div className="w-1/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
      </div>

      {/* Section Divider */}
      <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-700 mt-2 pt-2 space-y-2">
        {/* Experience */}
        <div className="w-1/3 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm"></div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm mb-3"></div>

        {/* Education */}
        <div className="w-1/4 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm"></div>
        <div className="w-5/6 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm mb-3"></div>

        {/* Skills */}
        <div className="w-1/5 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm"></div>
        <div className="flex gap-1 flex-wrap">
          <div className="w-1/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
          <div className="w-1/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
          <div className="w-1/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
          <div className="w-1/4 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
          <div className="w-1/3 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        </div>

        {/* Projects */}
        <div className="w-1/3 h-2 bg-gray-400 dark:bg-gray-500 rounded-sm mt-3"></div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-11/12 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
        <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
      </div>
    </div>
  </div>
</div>

      )
    },
    {
      title: "NPLAcademia",
      description: t('nplacademia'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      url: "#",
      visual: () => (
        <div className="relative w-full h-full flex items-center justify-around">
            {/* Graduation Hat */}
            <div className="w-1/3 text-gray-700 dark:text-gray-400">
                <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full animate-float-slow transition-transform hover:scale-110">
                    <defs>
                        <linearGradient id="gradCapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#003893'}} />
                            <stop offset="100%" style={{stopColor: '#DC143C'}} />
                        </linearGradient>
                         <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#glow-effect)" opacity="0.7">
                      <path d="M50 10 L90 30 L50 50 L10 30 Z" fill="url(#gradCapGradient)" />
                      <path d="M18 31 L50 49 L82 31 L50 65 Z" fill="rgba(0,0,0,0.3)" />
                      <line x1="80" y1="33" x2="88" y2="60" stroke="#DC143C" strokeWidth="2" />
                      <circle cx="88" cy="60" r="4" fill="#DC143C" />
                    </g>
                </svg>
            </div>

            {/* Papers Stack */}
            <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
                <div className="absolute w-40 h-48">
                    {/* Paper 3 (bottom) */}
                    <div className="w-full h-full bg-white dark:bg-gray-700 rounded-md shadow-lg transform -rotate-6 translate-x-3 translate-y-3 absolute top-0">
                        <div className="w-full h-full p-3 flex flex-col"><div className="w-full h-2 bg-[#003893]/50 mb-2 rounded"></div><div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div></div>
                    </div>
                    {/* Paper 2 (middle) */}
                    <div className="w-full h-full bg-white dark:bg-gray-700 rounded-md shadow-lg transform -rotate-3 translate-x-1 translate-y-1 absolute top-0">
                        <div className="w-full h-full p-3 flex flex-col"><div className="w-full h-2 bg-[#DC143C]/50 mb-2 rounded"></div><div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div></div>
                    </div>
                    {/* Paper 1 (top) */}
                    <div className="w-full h-full bg-white dark:bg-gray-700 rounded-md shadow-lg absolute top-0 hover:rotate-3 hover:translate-y-1 transition-transform cursor-pointer">
                        <div className="w-full h-full p-3 flex flex-col"><p className='font-bold text-sm dark:text-gray-400'>Abstract</p><div className="w-full h-2 bg-[#003893]/50 mb-2 rounded"></div><div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-1/2 h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div><div className="w-full h-2 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div></div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  ];

  const canvasRefs = useRef(initiatives.map(() => React.createRef()));
  
  useEffect(() => {
   
    initiatives.forEach((initiative, i) => {
      const canvas = canvasRefs.current[i];
      if (canvas && canvas.current) {
      }
    });

   
  }, []);

  return (
    <section className="lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {t('title')}        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:text-lg">
        {t('description')}              </p>
      </div>
  
      <div className="space-y-10">
        {initiatives.map((initiative, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-2 lg:gap-10 border-b border-gray-200 dark:border-gray-700 pb-20`}
          >
            {/* Mobile Title & Icon */}
            <div className="w-full flex justify-center items-center lg:hidden mb-6">
              <div className={`w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-[#003893]' : 'bg-[#DC143C]'} flex items-center justify-center text-white shadow-lg`}>
                {initiative.icon}
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 lg:w-3/5 lg:flex-none">
              {/* Desktop Title & Icon */}
              <div className={`hidden lg:flex items-center gap-4 mb-8 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                {index % 2 === 1 && <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>}
                <div className={`w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-[#003893]' : 'bg-[#DC143C]'} flex items-center justify-center text-white shadow-lg`}>
                  {initiative.icon}
                </div>
                {index % 2 === 0 && <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{initiative.title}</h3>}
              </div>
              
              <div className={`${index % 2 === 0 ? 'text-left lg:text-lg lg:items-start' : 'lg:items-end text-left lg:text-right lg:text-lg'} flex flex-col items-center `}>
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
            
            {/* Visual Section */}
            <div className="hidden lg:block flex-1 lg:w-2/5 lg:flex-none h-80">
              <div className="relative w-full h-full overflow-hidden">
                {initiative.visual()}
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