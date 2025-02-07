import React from 'react';
import { ArrowUpRight, Target, Rocket, Users, Globe, Brain, Code2, Sparkles } from 'lucide-react';
import Register from '@/components/Register';

const AboutUs = () => {
  return (
<main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
<section className="relative overflow-hidden mx-auto px-4 lg:px-8 pt-12 lg:pt-20">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              <span className="block mt-2 bg-gradient-to-r from-[#DC143C] to-[#003893] bg-clip-text text-transparent">
                <img src='./images/NPLCoder.png' className="w-16 h-16 inline-block -mt-2 mr-2">
                </img>
                NPLCoder
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                We envision a future where every student in Nepal, irrespective of their background or location, has equal access to high-quality technology education.
              </p>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Bridge the Educational Divide",
                    description: "Make coding and technological learning resources available to students in both urban and rural areas."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Empower the Youth",
                    description: "Equip students with the skills and confidence needed to excel in the global tech landscape."
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    title: "Drive National Growth",
                    description: "Contribute to the development of Nepal as a hub for technological innovation."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#DC143C]/10 to-[#003893]/10 flex items-center justify-center text-gray-800 dark:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="./images/code-grid1.png" alt="Students coding" className="rounded-2xl shadow-lg w-full h-full object-cover" />
              <img src="./images/code-grid2.png" alt="Tech workshop" className="rounded-2xl shadow-lg w-full h-full object-cover mt-8" />
              <img src="./images/code-grid2.png" alt="Rural education" className="rounded-2xl shadow-lg w-full h-full object-cover" />
              <img src="./images/code-grid1.png" alt="Innovation hub" className="rounded-2xl shadow-lg w-full h-full object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To unlock the vast potential of Nepalese talent by cultivating a culture of computational excellence and fostering innovation. NPLCoder is committed to equipping students with cutting-edge skills, invaluable resources, and transformative opportunities, enabling them to spearhead technological advancements on both national and global stages with confidence and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Goals and Objectives</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain />,
                title: "Promote Interest in Technology",
                description: "Foster interest in computing and informatics among high school and university students in Nepal."
              },
              {
                icon: <Code2 />,
                title: "Provide Access to Resources",
                description: "Offer educational tools, mentorship, training programs, and necessary funding to enhance computational skills."
              },
              {
                icon: <Sparkles />,
                title: "Encourage Innovation",
                description: "Create platforms that challenge participants to solve real-world problems using computational thinking."
              },
              {
                icon: <Target />,
                title: "Enhance Representation",
                description: "Enable talented students to represent Nepal in international competitions and global challenges in computing."
              }
            ].map((goal, idx) => (
              <div key={idx} className="rounded-2xl bg-white dark:bg-white/5 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#DC143C]/10 to-[#003893]/10 flex items-center justify-center text-gray-800 dark:text-white">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {goal.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/5 to-[#003893]/5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Join Our Mission
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://discord.com/invite/kJrvdhmzVd' target='_blank' rel='noreferrer'>
                <button className="inline-flex hover:scale-105 transition-all items-center justify-center px-6 py-4 rounded-xl text-white bg-gradient-to-r from-[#DC143C] to-[#003893] font-medium">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.317 4.369a19.791 19.791 0 0 0-4.884-1.528.075.075 0 0 0-.079.037c-.211.375-.447.864-.608 1.25-1.844-.276-3.68-.276-5.486 0-.162-.4-.41-.875-.625-1.25a.075.075 0 0 0-.079-.037A19.736 19.736 0 0 0 3.68 4.369a.07.07 0 0 0-.032.027C.533 9.174-.319 13.874.098 18.511a.081.081 0 0 0 .031.052A19.933 19.933 0 0 0 6.184 21.95a.076.076 0 0 0 .082-.027c.631-.86 1.18-1.767 1.641-2.695a.076.076 0 0 0-.041-.104 13.06 13.06 0 0 1-1.884-.905.076.076 0 0 1-.008-.125c.126-.094.252-.193.373-.295a.075.075 0 0 1 .077-.01c3.952 1.803 8.228 1.803 12.11 0a.075.075 0 0 1 .078.009c.12.102.247.201.374.295a.076.076 0 0 1-.007.125c-.597.35-1.244.657-1.887.905a.076.076 0 0 0-.04.104c.483.928 1.033 1.835 1.641 2.695a.076.076 0 0 0 .082.027 19.89 19.89 0 0 0 6.055-2.908.077.077 0 0 0 .031-.052c.5-5.14-.823-9.795-3.55-14.115a.075.075 0 0 0-.031-.026ZM9.02 15.403c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Zm5.958 0c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className='pl-2'>Join Our Discord</p>
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;