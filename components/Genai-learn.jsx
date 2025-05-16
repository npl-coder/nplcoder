import {
    Sparkles,
    BookOpen,
    Brain,
    Cloud,
    Cpu,
    Zap,
  } from "lucide-react";
  
  import { useTranslations } from "next-intl";
  const iconMap = {
    Sparkles: <Sparkles className="w-6 h-6" />,
    BookOpen: <BookOpen className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
  };
  const GenaiLearn = ({ title = "What You'll Learn", items = [] }) => {
    const half = Math.ceil(items.length / 2);
    const firstCol = items.slice(0, half);
    const secondCol = items.slice(half);
    const t = useTranslations("Genai");

    return (
      
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t("what_will_you_learn")}
        </h2>
        <div className="bg-white/50 dark:bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            {[firstCol, secondCol].map((col, colIdx) => (
              <div key={colIdx} className="space-y-6">
                {col.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`bg-gradient-to-br from-[${item.fromColor}] to-[${item.toColor}] rounded-full p-2 text-white`}
                    >
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t(item.title)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{t(item.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default GenaiLearn;
  