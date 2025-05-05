"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, StarIcon } from "lucide-react";
import ModeToggle from "./modeswitch";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveInitiative, setMobileActiveInitiative] = useState(null);

  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
      setIsScrollingUp(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const basicNavItems = ["Home", "About", "Events", "Team"];

  const initiativeItems = [
    {
      name: "NPLAlgo",
      resources: { name: "Resources", href: "#/nplalgo/resources" },
      contest: { name: "Contest", href: "#/nplalgo/contest" },
    },
    {
      name: "NPLNeural",
      resources: { name: "Resources", href: "#/nplneural/resources" },
      contest: { name: "Contest", href: "#/nplneural/contest" },
    },
    {
      name: "NPLCareer",
      resources: { name: "Resources", href: "#/nplcareer/resources" },
      contest: { name: "Contest", href: "#/nplcareer/contest" },
    },
    {
      name: "NPLAcademia",
      resources: { name: "Resources", href: "#/nplacademia/resources" },
      contest: { name: "Contest", href: "#/nplacademia/contest" },
    },
  ];

  const handleMouseEnter = (index) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (index) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(index);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-full transition-all duration-300 ${
          scrollPosition > 50 ? " " : "bg-transparent"
        }`}
      />

      <div className="relative mx-4 md:mx-6 lg:mx-8 lg:my-4 my-1">
        <nav
          className={`mx-auto rounded-2xl transition-all duration-300 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-none ${
            scrollPosition > 50
              ? "bg-white/80 dark:bg-[#2C3043]/80"
              : "bg-white/50 dark:bg-[#2C3043]"
          }`}
        >
          <div className="px-4 md:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 z-10">
                <img
                  src="./images/NPLCoder.png"
                  alt="NPL Coder"
                  className="w-10 h-10"
                />
                <div className="flex items-center">
                  <span className="text-gray-900 dark:text-white font-bold text-lg hidden md:inline">
                    NPL
                  </span>
                  <span className="text-gray-900 dark:text-white font-bold text-lg hidden md:inline">
                    Coder
                  </span>
                </div>
              </Link>

              <div className="hidden xl:flex items-center justify-center flex-1 mx-8">
                <div className="flex space-x-6 xl:space-x-8">
                  {basicNavItems.map((item) => (
                    <Link
                      key={item}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-900 dark:text-gray-300 transition-all duration-200 text-[16px] font-medium relative group"
                    >
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                    </Link>
                  ))}

                  {initiativeItems.map((initiative, index) => (
                    <div
                      key={initiative.name}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="text-gray-900 dark:text-gray-300 transition-all duration-200 text-[16px] font-medium flex items-center cursor-pointer">
                        {initiative.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>

                      <div
                        className={`absolute left-0 mt-2 w-48 rounded-md bg-white dark:bg-[#2C3043] shadow-lg border border-gray-100 dark:border-gray-700 z-[150] transition-all duration-200 ${
                          activeDropdown === index
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-1 pointer-events-none"
                        }`}
                        onMouseEnter={() => handleDropdownMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-1">
                          <Link
                            href={initiative.resources.href}
                            className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {initiative.resources.name}
                          </Link>
                          <Link
                            href={initiative.contest.href}
                            className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {initiative.contest.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <ModeToggle />

                <div className="hidden xl:flex">
                  <div className="relative inline-block">
                    <span className="absolute -top-2 -right-2 z-10 text-3xl rotate-45 text-yellow-500 animate-star-ping">
                      ★
                    </span>
                    <Link href="/gen-ai-fellowship">
                      <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1.5px] focus:outline-none focus:ring-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FF0000_30%,#E2CBFF_70%)]" />

                        <span className="relative inline-flex h-full w-full items-center justify-center rounded-xl bg-white dark:bg-slate-800 px-6 py-1 text-md font-medium text-slate-800 dark:text-white backdrop-blur-3xl">
                          Gen AI Fellowship
                        </span>
                      </button>
                    </Link>{" "}
                  </div>
                </div>

                <button
                  className="xl:hidden text-gray-900 dark:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-4 px-4 pb-6">
                {basicNavItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-900 dark:text-gray-300 transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}

                {initiativeItems.map((initiative, index) => (
                  <div key={initiative.name} className="relative">
                    <div
                      className="text-gray-900 dark:text-gray-300 text-lg font-medium flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setMobileActiveInitiative(
                          mobileActiveInitiative === index ? null : index
                        )
                      }
                    >
                      {initiative.name}
                      <ChevronRight
                        className={`h-5 w-5 transition-transform duration-300 ${
                          mobileActiveInitiative === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        mobileActiveInitiative === index
                          ? "max-h-24 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <Link
                        href={initiative.resources.href}
                        className="block text-gray-600 dark:text-gray-400 text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {initiative.resources.name}
                      </Link>
                      <Link
                        href={initiative.contest.href}
                        className="block text-gray-600 dark:text-gray-400 text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {initiative.contest.name}
                      </Link>
                    </div>
                  </div>
                ))}

                <div className="relative inline-block">
                  <Link href="/gen-ai-fellowship">
                    {" "}
                    <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1.5px] focus:outline-none focus:ring-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FF0000_30%,#E2CBFF_70%)]" />

                      <span className="relative inline-flex h-full w-full items-center justify-center rounded-xl bg-white dark:bg-slate-800 px-6 py-1 text-md font-medium text-slate-800 dark:text-white backdrop-blur-3xl">
                        Gen AI Fellowship
                      </span>
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
