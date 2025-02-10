import Image from 'next/image'
import { FaLinkedin, FaGlobeAmericas } from 'react-icons/fa'

const Card = ({ name, title, image, linkedin, website }) => {
  return (

    <div className="group max-w-[300px] mx-auto text-center font-sans p-1 h-[500px] transition-all duration-1000 hover:shadow-xl">
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


      <div className="my-4 flex justify-center space-x-4 opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 group-hover:pointer-events-auto">
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