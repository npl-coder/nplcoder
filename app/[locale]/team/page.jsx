import Card from "@/components/Card";
import { FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import { useTranslations } from "next-intl";

const teamMembers = [
  {
    name: "Aditi Gajurel",
    title: "University of Southern California",
    image: "../images/teamMembers/aditi.jpeg",
    linkedin: "https://www.linkedin.com/in/aditi-gajurel-334492146/",
    category: "Founding",
  },
  {
    name: "Aayushma Sapkota",
    title: "Stanford University | CS + MS&E | QuestBridge",
    image: "../images/teamMembers/Aayushma.jpeg",
    linkedin: "https://www.linkedin.com/in/aayushma-sapkota/",
    category: "Founding",
  },
  {
    name: "Manish Acharya",
    title: "Undergraduate Student, Vanderbilt University",
    image: "../images/teamMembers/ManishAcharya.jpeg",
    linkedin: "https://www.linkedin.com/in/manishacharya60/",
    website: "https://acharyamanish.net/",
    category: "Founding",
  },
  {
    name: "Aashish Karki",
    title:
      "IOE, Pulchowk Campus || AWS Certified Solutions Architect Associate",
    image: "../images/teamMembers/Aashish.jpeg",
    linkedin: "https://www.linkedin.com/in/aashish-karki-718757233/",
    website: "https://karkiaashish.com.np/",
    category: "Founding",
  },
  {
    name: "Atish Shah Rouniyar",
    title: "Graduate student at Wichita State University",
    image: "../images/teamMembers/Atish.jpeg",
    linkedin: "https://www.linkedin.com/in/atishshahrouniyar/",
    category: "Operations",
  },
  {
    name: "Manish Dhakal",
    title: "PhD Student at GSU",
    image: "../images/teamMembers/Manish.jpeg",
    linkedin: "https://www.linkedin.com/in/manishdhakal521/",
    category: "Operations",
  },
  {
    name: "Rohit Pokhrel",
    title: "Incoming SWE @ Two Sigma | Senior @ Oberlin",
    image: "../images/teamMembers/Rohit.jpeg",
    linkedin: "https://www.linkedin.com/in/rohitpoks/",
    category: "Operations",
  },
  {
    name: "Hemanta Sharma",
    title: "CS @ UC Berkeley",
    image: "../images/teamMembers/hemanta.jpeg",
    linkedin: "https://www.linkedin.com/in/hemanta-sharma-586089315/",
    category: "Operations",
  },
  {
    name: "Sumit Yadav",
    title: "AI Engineer",
    image: "../images/teamMembers/Sumit.jpeg",
    linkedin: "https://www.linkedin.com/in/rockerritesh",
    category: "Operations",
  },
  {
    name: "Nishchit Bhandari",
    title: "Discord Moderator",
    image: "../images/teamMembers/Nischit.jpg",
    website: "https://nishchit.work",
    linkedin: "https://www.linkedin.com/in/nishchit-bhandari",
    category: "Operations",
  },
  {
    name: "Safal Poudel",
    title: "Web Developer",
    image: "../images/teamMembers/Safal.jpeg",
    website: "https://www.safal-poudel.com.np/",
    linkedin: "https://www.linkedin.com/in/safalpoudel808/",
    category: "Operations",
  },
  // {
  //   name: "Sujit Maharjan",
  //   title: "PhD Student in Computer Science, University of Texas at Arlington",
  //   image: "https://maharjansujit.com.np/images/avatar.jpg",
  //   website: "https://maharjansujit.com.np",
  //   category: "Operations"
  // },
  {
    name: "Amrit Kandel",
    title: "Founder & Visionary |  Advisor (Current)",
    image: "../images/teamMembers/Amrit.jpeg",
    linkedin: "https://www.linkedin.com/in/amritkandel/",
    category: "Advisory",
  },
  {
    name: "Debojoti Das Soumya",
    title: "Competitive Programmer | 3x IOI Medalist, MIT",
    image: "./images/teamMembers/Soumya.jpeg",
    linkedin: "https://www.linkedin.com/in/debojoti-das-soumya-683539288/",
    website: "https://stats.ioinformatics.org/people/7675/",
    category: "Advisory",
  },
  // {
  //   name: "Raul Aguilera",
  //   title: "Advisor",
  //   image: './images/teamMembers/Raul.jpeg',
  //   linkedin: "https://www.linkedin.com/in/aguilera-avenue/",
  //   category: "Advisory"
  // },
];

export default function TeamPage() {
  const t = useTranslations("Team");

  const executiveMembers = teamMembers.filter(
    (member) => member.category === "Founding"
  );
  const operationMembers = teamMembers.filter(
    (member) => member.category === "Operations"
  );
  const advisoryMembers = teamMembers.filter(
    (member) => member.category === "Advisory"
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
      <section className="px-4 py-10 lg:px-8 max-w-7xl mx-auto my-20">
        {/* <h1 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white">
            Meet Our Team
          </h1> */}

        {/* Executive Members Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white text-center">
            {t("founding_members")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {executiveMembers.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedin={member.linkedin}
                website={member.website}
              />
            ))}
          </div>
        </div>

        {/* Operations Members Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 mt-2  text-gray-900 dark:text-white text-center">
            {t("project_members")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {operationMembers.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedin={member.linkedin}
                website={member.website}
              />
            ))}
          </div>
        </div>

        {/* Advisory Members Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 mt-2 text-gray-900 dark:text-white text-center">
            {t("advisory_members")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div>
              {advisoryMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-gray-100 dark:bg-gray-800 p-5 mb-4 rounded-lg border-l-4 border-[#003893] transition-all duration-300 hover:shadow-md hover:border-[#DC143C] flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {member.title}
                  </p>

                  <div className="flex mt-3 space-x-3">
                    {member.website && (
                      <a
                        href={member.website}
                        className="text-gray-700 dark:text-gray-300 hover:text-[#DC143C] dark:hover:text-[#DC143C] transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGlobeAmericas size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-gray-700 dark:text-gray-300 hover:text-[#003893] dark:hover:text-[#003893] transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
