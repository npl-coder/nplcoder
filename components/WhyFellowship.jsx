import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
const WhyFellowship = ({ reasons = [] }) => {
  const half = Math.ceil(reasons.length / 2);
  const firstCol = reasons.slice(0, half);
  const secondCol = reasons.slice(half);
  const t = useTranslations("Genai");

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {t("why_fellowship_title")}
      </h2>
      <div className="bg-white/50 dark:bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12">
          {[firstCol, secondCol].map((col, colIdx) => (
            <ul key={colIdx} className="space-y-6">
              {col.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className={`mt-1 text-[${item.color}]`}>
                    <CircleCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t(item.title)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(item.description)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyFellowship;
