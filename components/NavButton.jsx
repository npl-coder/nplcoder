import React from 'react';
import Link from 'next/link';

const CombinedButton = () => {
  return (
    <Link href="/gen-ai-fellowship" >
    <button 
      className="relative inline-flex items-center justify-content overflow-hidden transition-all duration-300 ease-in-out rounded-xl border-none outline-none px-5 py-3 cursor-pointer group bg-gradient-to-r from-[#DC143C] to-[#003893]"
    >
      {/* Before pseudo-element for gradient overlay */}
      <div className="absolute inset-0 rounded-xl opacity-20 transition-opacity duration-300 z-10 pointer-events-none"
           style={{
             background: `
               radial-gradient(at 51% 89%, rgba(186, 164, 255, 0.3) 0px, transparent 50%),
               radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
               radial-gradient(at 22% 91%, rgba(139, 92, 246, 0.3) 0px, transparent 50%)
             `
           }} />
      
      {/* Inner gradient layers */}
      <div className="absolute inset-0 rounded-xl z-0 "
           style={{
             background: `linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)`
           }} />
      
      <div className="absolute inset-0 rounded-xl z-0"
           style={{
             background: `
               radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%),
               linear-gradient(0deg, #7a5af8, #7a5af8)
             `
           }} />

      {/* Moving border effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden -z-10 opacity-60"
           style={{
             width: 'calc(100% + 4px)',
             height: 'calc(100% + 4px)',
             left: '-2px',
             top: '-2px'
           }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-6 bg-gradient-to-r from-[#DC143C] to-[#003893] animate-spin"
             style={{
               mask: 'linear-gradient(transparent 0%, white 50%, transparent 100%)',
               animation: 'spin 3s linear infinite'
             }} />
      </div>

      {/* Animated floating points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[10, 30, 25, 44, 50, 75, 88, 58, 98, 65].map((leftPos, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${leftPos}%`,
              bottom: '-10px',
              opacity: [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1][i],
              animation: `floatingPoints ${[2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5][i]}s ease-in-out infinite`,
              animationDelay: `${[0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2][i]}s`
            }}
          />
        ))}
      </div>

      {/* Sparkle icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-white relative z-20 group-hover:animate-pulse"
      >
        <path
          className="group-hover:animate-pulse"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          fill="currentColor"
          d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
        />
        <path
          className="group-hover:animate-pulse"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          fill="currentColor"
          d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
        />
        <path
          className="group-hover:animate-pulse"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          fill="currentColor"
          d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
        />
      </svg>

      {/* Button text */}
      <span className="relative z-20 text-white font-medium text-lg ml-2">
        GenAI Fellowship 101
      </span>

      {/* Floating points animation */}
      <style jsx>{`
        @keyframes floatingPoints {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }
      `}</style>
    </button>
    </Link>
  );
};

export default CombinedButton;
