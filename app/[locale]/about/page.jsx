import React from 'react';
import { ArrowUpRight, Target, Rocket, Users, Globe, Brain, Code2, Sparkles, Network, UserPlus, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

const AboutUs = () => {

  const t = useTranslations('About');
  const g = useTranslations('goals');
  const v = useTranslations('values');
  const values = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: v('title'),
      description: v('description'),
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title:  v('title1'),
      description:  v('description1'),
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title:  v('title2'),
      description: v('description2'),
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title:  v('title3'),
      description:  v('description3'),
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title:  v('title4'),
      description:  v('description4'),
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  const goals = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: g('title'),
      description: g('description'),
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: g('title1'),
      description: g('description1'),
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: g('title2'),
      description: g('description2'),
      color: "from-teal-500/20 to-teal-600/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: g('title3'),
      description: g('description3'),
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: g('title4'),
      description: g('description4'),
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: g('title5'),
      description: g('description5'),
       color: "from-rose-500/20 to-rose-600/20"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: g('title6'),
      description: g('description6'),
      color: "from-violet-500/20 to-violet-600/20"
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
    <section className="relative overflow-hidden mx-auto lg:px-8 pt-16 lg:pt-[180px]">
      <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 items-center">
      <div className="relative group flex justify-center lg:justify-center">
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <img 
                src="/images/NPLCoder.png" 
                alt="About NPLCoder" 
                className="w-48 h-48 lg:w-[300px] lg:h-[300px] object-cover transform  transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
               {t('title')}
            </h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed ">
{t('description1')} </p>
           <p className="text-lg leading-relaxed">
           {t('description2')}
           </p>    
<p className='text-lg leading-relaxed'>{t('description3')}
</p></div>
      </div>
    </div>
  </div>
</section>
<section className="py-16">
  <br></br>
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white bg-clip-text">
        {t('missionheading')}
          </h2>
          <div className="text-center text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {t('mission')}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white bg-clip-text">
          {v('headline')}
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
            {g('headline')}
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