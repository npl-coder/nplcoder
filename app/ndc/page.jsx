'use client'
import React, { useState } from 'react';
import { Calendar, Share2, CheckCircle, Trophy, Users, Target, Brain, HeartHandshake, GraduationCap, Code } from 'lucide-react';

const NDC = () => {
  const [shareText, setShareText] = useState("Share the challenge");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareText("Link copied!");
      setIsCopied(true);
      setTimeout(() => {
        setShareText("Share the challenge");
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setShareText("Failed to copy");
      setTimeout(() => setShareText("Share the challenge"), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-[100px]">
      <div className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DC143C] to-[#003893]">
            Nepal Data Challenge
              </h1>
              <h2 className="text-2xl lg:text-3xl mb-6 text-gray-800 dark:text-gray-200">
                Where Passion Meets Possibility
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join us in revolutionizing AI and Machine Learning in Nepal. Be part of a movement that's shaping the future through collaboration and mentorship.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 transition-all">
                  Register Now
                </button>
                <button
                  onClick={handleShare}
                  className={`px-8 py-4 border-2 rounded-xl font-semibold flex items-center gap-2 transition-colors ${
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
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Join NPLCoder?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <GraduationCap className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mentorship and Role Models</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gain access to experienced mentors who will guide you throughout the competition and beyond.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <HeartHandshake className="w-8 h-8 text-[#003893] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaborative Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a network of like-minded individuals who believe in helping each other succeed.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
              <Brain className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Professional Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build lasting professional relationships and access resources for jobs and graduate school opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-16">
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rules and Guidelines</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p><strong>Competition Ethos:</strong> This challenge focuses on collaboration over competition. Every participant is expected to contribute to the collective success of the group.</p>
              <p><strong>Team Formation:</strong> Teams of up to 4 members. Cross-discipline teams are encouraged.</p>
              <p><strong>Registration Deadline:</strong> Jan 10, 2025 12:00 PST</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Prize</h2>
            <div className="flex items-center gap-4">
              <Trophy className="w-12 h-12 text-[#DC143C]" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">First Place</p>
                <p className="text-xl text-gray-600 dark:text-gray-300">Rs. 25,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Evaluation Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
              <Code className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Engagement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consistent and meaningful participation on the provided platform.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
              <Target className="w-8 h-8 text-[#003893] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                How well participants think outside the box and solve problems creatively.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg">
              <Users className="w-8 h-8 text-[#DC143C] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support for others and contribution to the community's growth.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white rounded-xl font-semibold hover:opacity-90 text-xl transition-all">
            Sign Up for the Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default NDC;