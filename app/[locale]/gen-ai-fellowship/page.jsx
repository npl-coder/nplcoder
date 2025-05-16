"use client";
import React, { useState } from "react";
import {
  Calendar,
  Share2,
  CheckCircle,
  Trophy,
  Users,
  Target,
  Brain,
  HeartHandshake,
  GraduationCap,
  Code,
  Sparkles,
  Cpu,
  Cloud,
  Rocket,
  BookOpen,
  Zap,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

import { useTranslations } from "next-intl";
import Timeline from "../../../components/Timeline";
import timelineEvents from "../../../data/timelineData";
import genAIlearn from "../../../data/genAIlearn";
import GenaiLearn from "../../../components/Genai-learn";
import whyData from "../../../data/whyData";
import WhyFellowship from "../../../components/WhyFellowship";

const NPLCoderFellowship = () => {
  const t = useTranslations("Genai");

  const [shareText, setShareText] = useState(t("share_button"));
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareText(t("link_copied"));
      setIsCopied(true);
      setTimeout(() => {
        setShareText(t("share_button"));
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error(t('failed_to_copy'), err);
      setShareText(t('failed_to_copy'));
      setTimeout(() => setShareText(t("share_button")), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-[180px]">
        <div className="relative py-12 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6 ">
                  NPLCoder GenAI Builders Fellowship 001
                </h1>
                <h2 className="text-2xl lg:text-2xl mb-6 text-gray-800 dark:text-gray-200">
                  {t("program_title")}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                 {t("description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://forms.gle/tkY6EJSuDugmVn6RA"
                    target="_blank"
                  >
                    <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 transition-all">
                     {t("apply_button")}
                    </button>
                  </a>
                  <button
                    onClick={handleShare}
                    className={`px-8 py-4 border-2 rounded-xl font-semibold flex items-center gap-2 transition-colors ${
                      isCopied
                        ? "bg-green-500 text-white border-green-500"
                        : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {isCopied ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Share2 className="w-5 h-5" />
                    )}
                    {shareText}
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img
                  src="/images/gen-ai-fellowship.svg"
                  alt="GenAI Fellowship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-4">
                <Calendar className="w-10 h-10 text-[#DC143C]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                   {t("fellowship_duration")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fellowship Duration
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Rocket className="w-10 h-10 text-[#003893]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t("demo_day")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Demo Day</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-[#DC143C]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                   {t("time_commitment")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Time Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GenaiLearn title="What You'll Learn" items={genAIlearn} />
        <Timeline events={timelineEvents} />
        <div className="bg-gradient-to-r from-[#DC143C]/10 to-[#003893]/10 dark:from-[#DC143C]/20 dark:to-[#003893]/20 p-4 rounded-xl">
          <p className="text-lg text-center font-semibold text-gray-900 dark:text-white">
            {t("best_project_award")}
          </p>
        </div>

        <WhyFellowship title={t('why_fellowship_title')} reasons={whyData} />

        <div className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
           {t("eligibility_criteria_title")}
          </h2>
          <div className="bg-gradient-to-r from-[#DC143C]/10 to-[#003893]/10 dark:from-[#DC143C]/20 dark:to-[#003893]/20 rounded-2xl p-10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex flex-col items-center text-center max-w-xs">
                <Users className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                 {t("nepali_citizen")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("nepali_citizen_desc")}
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex flex-col items-center text-center max-w-xs">
                <GraduationCap className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("education")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("education_desc")}
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex flex-col items-center text-center max-w-xs">
                <Calendar className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("commitment")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("commitment_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pb-8">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#DC143C]/20 to-[#003893]/20 dark:from-[#DC143C]/30 dark:to-[#003893]/30 rounded-full mb-8">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                <strong>{t("application_deadline")}</strong>
              </p>
            </div>
          </div>
          <a
            href="https://forms.gle/tkY6EJSuDugmVn6RA"
            target="_blank"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 text-xl transition-all">
            {t("apply_now")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NPLCoderFellowship;
