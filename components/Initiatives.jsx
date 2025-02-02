import React from 'react';
import { CodeIcon, CurlyBracesIcon, Database } from 'lucide-react';

const Initiative = ({ icon, title, description }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#2C3043]/50 backdrop-blur-lg p-8 shadow-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl text-white font-bold tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-300 text-lg">
            {description}
          </p>
        </div>
        
        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-4 rounded-[16px] font-semibold transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Initiatives = () => {
  return (
    <section className="mt-32 mb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-white text-2xl font-bold tracking-tight text-center mb-8">
          Our Initiatives
        </h2>
        
        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-16">
          NPLCoder has two initiatives aimed at fostering technological skills among students in Nepal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Initiative
            icon={<CurlyBracesIcon className="w-8 h-8 text-white" />}
            title="Nepal Olympiad in Informatics"
            description="The National Olympiad in Informatics (NOI) is an inaugural programming competition open to secondary school and junior college students across Nepal. The competition consists of an online qualification round followed by a final contest for top performers. Participants will solve algorithmic problems that test their programming and problem-solving abilities. The NOI aims to promote interest in informatics and computational thinking. High-achieving students may receive medals and awards, and outstanding performers could be selected for further training with the possibility of representing Nepal at the International Olympiad in Informatics (IOI). Visit this page to learn more and sign up."
          />
          
          <Initiative
            icon={
              <Database className='w-8 h-8 text-white'/>
            }
            title="Nepal Data Challenge"
            description="The Nepal Data Challenge is a program for university students interested in AI and ML. It focuses on collaboration, mentorship, and professional development. Participants can work individually or in teams of up to four members to tackle data-driven projects. The challenge encourages building professional networks and emphasizes inclusivity and support among participants. Prizes are awarded to top teams based on technical excellence, innovation, and collaborative efforts, with a total prize pool of $1,000. Visit this page to learn more and sign up."
          />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;