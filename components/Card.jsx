import Image from 'next/image'
import { FaLinkedin, FaGlobeAmericas } from 'react-icons/fa'

const Card = ({ name, title, image, linkedin, website }) => {
  return (

    <div className="group max-w-[300px] mx-auto text-center font-sans pt-4 px-4 pb-1 h-[450px] transition-all duration-1000 hover:shadow-xl">
      <div className="border-4 border-gray-300 transition-all duration-500 group-hover:border-red-500">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="font-bold mt-4 text-lg">{name}</h1>
      <p className="text-gray-500 text-sm my-2">{title}</p>


      <div className="mt-8 mb-1 flex justify-center space-x-4">
        {website && (
          <a href={website} className="text-black-600 text-xl" target="_blank" rel="noreferrer">
            <FaGlobeAmericas size={24} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} className="text-blue-600 text-xl" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} />
          </a>
        )}
      </div>
    </div>
  )
}

export default Card