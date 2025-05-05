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

import Timeline from "../../components/Timeline";
import timelineEvents from "../../data/timelineData";
import genAIlearn from "../../data/genAIlearn";
import GenaiLearn from "../../components/Genai-learn";
import whyData from "../../data/whyData";
import WhyFellowship from "../../components/WhyFellowship";

const NPLCoderFellowship = () => {
  const [shareText, setShareText] = useState("Share this fellowship");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareText("Link copied!");
      setIsCopied(true);
      setTimeout(() => {
        setShareText("Share this fellowship");
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setShareText("Failed to copy");
      setTimeout(() => setShareText("Share this fellowship"), 2000);
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
                  Build real AI products in 6 weeks
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  A 6-week intensive program for Nepali students and
                  professionals looking to become hands-on AI builders. This
                  isn't another course, it's a launchpad for building real,
                  usable, AI-first products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhSf-f1e0gNzdrzjjWxlYCCpsLsoVwoIXfaKk-Whc8i0nhqg/viewform"
                    target="_blank"
                  >
                    <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 transition-all">
                      Apply Now
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
                    June 1 – July 12, 2025
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
                    July 13, 2025
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Demo Day</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Target className="w-10 h-10 text-[#DC143C]" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    10–14 hours/week
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
            Best Project Award: Funding & Growth Support
          </p>
        </div>

        <WhyFellowship title="Why This Fellowship?" reasons={whyData} />

        <div className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Eligibility Criteria
          </h2>
          <div className="bg-gradient-to-r from-[#DC143C]/10 to-[#003893]/10 dark:from-[#DC143C]/20 dark:to-[#003893]/20 rounded-2xl p-10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex flex-col items-center text-center max-w-xs">
                <Users className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Nepali Citizen
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Must be a citizen of Nepal
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex flex-col items-center text-center max-w-xs">
                <GraduationCap className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Undergraduate student or beyond
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>

              <div className="flex flex-col items-center text-center max-w-xs">
                <Calendar className="w-16 h-16 text-black dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Commitment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  10–14 hours per week for 6 weeks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pb-8">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#DC143C]/20 to-[#003893]/20 dark:from-[#DC143C]/30 dark:to-[#003893]/30 rounded-full mb-8">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                <strong>Application Deadline:</strong> May 29, 2025
              </p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhSf-f1e0gNzdrzjjWxlYCCpsLsoVwoIXfaKk-Whc8i0nhqg/viewform"
            target="_blank"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 text-xl transition-all">
              Apply for the Fellowship
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NPLCoderFellowship;
