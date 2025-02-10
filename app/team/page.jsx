import Card from '@/components/Card'

const teamMembers = [{
    name: "Aditi Gajurel",
    title: "University of Southern California",
    image: './images/teamMembers/aditi.jpeg',
    linkedin: "https://www.linkedin.com/in/aditi-gajurel-334492146/",
  },
  {
    name: "Aayushma Sapkota",
    title: "Stanford University | CS + MS&E | QuestBridge",
    image: './images/teamMembers/Aayushma.jpeg',
    linkedin: "https://www.linkedin.com/in/aayushma-sapkota/",
  },
  {
    name: "Manish Acharya",
    title: "Undergraduate Student, Vanderbilt University",
    image: './images/teamMembers/ManishAcharya.jpeg',
    linkedin: "https://www.linkedin.com/in/manishacharya60/",
  },
  {
    name: "Aashish Karki",
    title: "IOE, Pulchowk Campus || AI Fellow '24 @Fusemachines || APIE || AWS Certified Solution Architect Associate",
    image: './images/teamMembers/Aashish.jpeg',
    linkedin: "https://www.linkedin.com/in/aashish-karki-718757233/",
    website: "https://karkiaashish.com.np/",
  },
  {
    name: "Mahesh Pandit",
    title: "Undergraduate Student",
    image: "https://uunchai.org/assets/img/mahesh.jpg",
    website: "https://maheshpandit.com.np/",
  },
  {
    name: "Sumit Yadav",
    title: "AI Engineer",
    image: './images/teamMembers/Sumit.jpeg',
    linkedin: "https://www.linkedin.com/in/rockerritesh",
  },
  // {
  //   name: "Amod Paudel",
  //   title: "Computer Engineering Student at IOE, Pulchowk Campus",
  //   image: "./images/PratikDahal.jpg",
  //   linkedin: "https://www.linkedin.com/in/pratik-dahal-430aa21b2/",
  // },
  {
    name: "Sujit Maharjan",
    title: "PhD Student in Computer Science, University of Texas at Arlington",
    image: "https://maharjansujit.com.np/images/avatar.jpg",
    website: "https://maharjansujit.com.np",
  },
  {
    name: "Amrit Kandel",
    title: "Advisor",
    image: './images/teamMembers/Amrit.jpeg',
    linkedin: "https://www.linkedin.com/in/amritkandel/",
  },
  {
    name: "Raul Aguilera",
    title: "Advisor",
    image: './images/teamMembers/Raul.jpeg',
    linkedin: "https://www.linkedin.com/in/aguilera-avenue/",
  },
]

export default function TeamPage() {
    return (
      <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
        <section className="px-4 py-10 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {teamMembers.map((member) => (
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
        </section>
      </main>
    )
  }