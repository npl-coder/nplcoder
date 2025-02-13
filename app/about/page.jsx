import React from 'react';
import { ArrowUpRight, Target, Rocket, Users, Globe, Brain, Code2, Sparkles, Network, UserPlus, User } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bridge the Educational Divide",
      description: "Make coding and technological learning resources available to students in both urban and rural areas.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empower the Youth",
      description: "Equip students with the skills and confidence needed to excel in the global tech landscape.",
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Drive National Growth",
      description: "Contribute to Nepal's development as a hub for technological innovation.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Achieve Global Representation",
      description: "Support students to represent Nepal in international competitions and platforms.",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Create Sustainable Impact",
      description: "Build evolving programs ensuring long-term community benefits.",
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  const goals = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Promote Interest in Technology",
      description: "Foster interest in computing and informatics among Nepali students.",
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Provide Access to Resources",
      description: "Offer educational tools, mentorship, and training programs.",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Encourage Innovation",
      description: "Create platforms for solving real-world problems with computation.",
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Enhance Representation",
      description: "Enable students to compete in IOI, ICPC, and global challenges.",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Build Professional Networks",
      description: "Connect students with mentors and industry professionals.",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Ensure Inclusivity",
      description: "Encourage participation from all districts of Nepal.",
      color: "from-rose-500/20 to-rose-600/20"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Develop Mentorship",
      description: "Guide junior participants and support future technologists.",
      color: "from-violet-500/20 to-violet-600/20"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
<section className="relative overflow-hidden mx-auto lg:px-8 pt-24 lg:pt-[220px]">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="relative group flex justify-center lg:justify-start">
        <div className="relative z-10 rounded-3xl overflow-hidden">
          <img 
            src="./images/NPLCoder.png" 
            alt="About NPLCoder" 
            className="w-48 h-48 lg:w-64 lg:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-[#DC143C]/20 to-[#003893]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 -z-10" />
      </div>

      <div className="space-y-6 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          About NPLCoder
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            NPLCoder is dedicated to fostering technological innovation and excellence among Nepalese students. We believe in the power of education to transform lives and communities.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform serves as a bridge between talented students and the resources they need to excel in the global tech landscape. Through mentorship, training, and hands-on experience, we're building the next generation of tech leaders.
          </p>
          <p className="text-lg leading-relaxed">
            By focusing on both urban and rural areas, we ensure that opportunities in technology education are accessible to all students across Nepal, regardless of their background or location.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-gray-800 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#DC143C]/0 to-[#003893]/0 group-hover:from-[#DC143C]/5 group-hover:to-[#003893]/5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Our Goals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-gray-800 dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#DC143C]/0 to-[#003893]/0 group-hover:from-[#DC143C]/5 group-hover:to-[#003893]/5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default AboutUs;