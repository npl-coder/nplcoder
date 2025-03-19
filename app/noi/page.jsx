'use client'
import React, { useState } from 'react';
import { Calendar,Share2, CheckCircle, Trophy, Users, Target, Brain, Globe } from 'lucide-react';

const NOI = () => {
  const [shareText, setShareText] = useState("Share the event");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareText("Link copied!");
      setIsCopied(true);

      setTimeout(() => {
        setShareText("Share the event");
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setShareText("Failed to copy");

      setTimeout(() => setShareText("Share the event"), 2000);
    }
  }
  
  return (
    <div className="min-h-screen bg-white pb-20 dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-[100px]">
        <div className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DC143C] to-[#003893]">
                Nepal Codes Challenge 2025
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join us in revolutionizing competitive programming in Nepal. Be part of a movement that's shaping the future of tech education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90">
                  Register Now
                </button>
                <button
                  onClick={handleShare}
                  className={`px-8 py-4 border-2 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-300 ${
                    isCopied
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {isCopied ? <CheckCircle className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  {shareText}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <Calendar className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Event Timeline</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Registration: March 1-15</li>
                <li>Phase 1: April 1-30</li>
                <li>Phase 2: May 1-31</li>
                <li>Finals: June 30</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <Trophy className="w-8 h-8 text-[#003893] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Prizes</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>1st Place: NPR 100,000</li>
                <li>2nd Place: NPR 50,000</li>
                <li>3rd Place: NPR 25,000</li>
                <li>Special Category Awards</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <Users className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Who Can Participate</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Students aged 16-25</li>
                <li>Basic programming knowledge</li>
                <li>Currently residing in Nepal</li>
                <li>Teams of 2-3 members</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/30 py-16 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Challenge Tracks</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
                <Target className="w-8 h-8 text-[#DC143C] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Algorithmic Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Master fundamental algorithms and data structures through hands-on challenges and expert mentorship.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
                <Brain className="w-8 h-8 text-[#003893] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tackle real-world problems and develop solutions that matter for Nepal's tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NOI;