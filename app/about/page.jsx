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
      description: "Equip students with the skills and confidence needed to excel in the global tech landscape, enabling them to contribute innovative solutions to real-world problems.",
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Drive National Growth",
      description: "Contribute to the development of Nepal as a hub for technological innovation by fostering a generation of skilled programmers and tech professionals.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Achieve Global Representation",
      description: "Support students to represent Nepal in international competitions and platforms, showcasing their talents on a global stage and bringing recognition to the nation's capabilities.",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Create Sustainable Impact",
      description: "Build programs that evolve to meet the changing needs of students, ensuring long-term benefits for the community.",
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  const goals = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Promote Interest in Technology",
      description: "Foster interest in computing and informatics among high school and university students in Nepal.",
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Provide Access to Resources",
      description: "Offer educational tools, mentorship, training programs, and necessary funding to students to enhance their computational skills and enable them to carry out impactful projects and research.",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Encourage Innovation",
      description: "Create platforms that challenge participants to solve real-world problems using computational thinking.",
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Enhance Representation",
      description: "Enable talented students to represent Nepal in international competitions such as the International Olympiad in Informatics (IOI), the International Collegiate Programming Contest (ICPC), Kaggle Competitions, IEEE Big Data Cup, and other prestigious global challenges in computing.",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Build Professional Networks",
      description: "Connect students with mentors and industry professionals to foster collaboration, career development, and leadership in AI/ML research.",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Ensure Inclusivity",
      description: "Encourage participation from diverse backgrounds by actively targeting students from all districts of Nepal, ensuring equal opportunities for all students regardless of their geographic or economic circumstances",
      color: "from-rose-500/20 to-rose-600/20"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Develop Mentorship",
      description: "Identify and engage mentors who can guide junior participants and support the next generation of technologists.",
      color: "from-violet-500/20 to-violet-600/20"
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
    <section className="relative overflow-hidden mx-auto lg:px-8 pt-24 lg:pt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 items-center">
      <div className="relative group flex justify-center lg:justify-center">
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <img 
                src="./images/NPLCoder.png" 
                alt="About NPLCoder" 
                className="w-48 h-48 lg:w-[300px] lg:h-[300px] object-cover transform  transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#DC143C]/20 to-[#003893]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 -z-10" />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
               NPLCoder
            </h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed ">
         <b> NPLCoder </b>is a non-profit organization driven by a simple yet powerful belief: the immense talent in Nepal deserves the opportunity to shine in the field of technology. Nepal, a land of unparalleled cultural and natural diversity, is home to resilient and resourceful people who have long harnessed their ingenuity to adapt to challenging environments. However, in this era of rapid technological advancement, there is a pressing need to channel this potential into the field of computing and innovation.          </p>
          <p className="text-lg leading-relaxed">
          We are dedicated to empowering students in Nepal by providing them with the tools, resources, and support they need to excel in computing and lead the computing innovation from Nepal. By blending the richness of Nepal’s cultural heritage with a forward-looking approach to technology, we strive to cultivate a generation of technologists who will solve global challenges while proudly carrying the identity of their homeland. With the tagline "Shaping Nepal’s Future with Computational Innovation," we aim to nurture the next generation of technologists and computational thinkers.
</p>    
<p className='text-lg leading-relaxed'>NPLCoder is more than an organization; it is a movement to empower Nepalese youth through computational innovation. By nurturing talent, fostering collaboration, and providing platforms for growth, NPLCoder aims to shape Nepal’s future, one student at a time.</p>
    </div>
      </div>
    </div>
  </div>
</section>
<section className="py-16">
  <br></br>
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white bg-clip-text">
        Our Mission
          </h2>
          <div className="text-center text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            To unlock the vast potential of Nepalese talent by cultivating a culture of computational excellence and fostering innovation. NPLCoder is committed to equipping students with cutting-edge skills, invaluable resources, and transformative opportunities, enabling them to spearhead technological advancements on both national and global stages with confidence and expertise.
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white bg-clip-text">
            Our Vision
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