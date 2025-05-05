import { Trophy } from "lucide-react";

const Timeline = ({ title = "Fellowship Timeline", events = [] }) => {
  return (
    <div className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {title}
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DC143C] to-[#003893] md:left-1/2 md:transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center"
            >
                
              <div className="flex-1 pl-10 md:pl-0 md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
              
                <h3
                  className={`text-xl font-bold ${
                    event.isDemoDay
                      ? "text-[#DC143C] dark:text-[#FF6B81]"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 md:hidden">
                  {event.description}
                </p>
              </div>

              <div
                className={`absolute top-1 ${
                  event.isDemoDay ? "w-8 h-8 left-1" : "w-4 h-4 left-2.5"
                } rounded-full ${
                  event.isDemoDay
                    ? "bg-gradient-to-r from-[#DC143C] to-[#003893] flex items-center justify-center"
                    : `bg-[${event.dotColor || "#DC143C"}]`
                } md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}
              >
                {event.isDemoDay && <Trophy className="w-3 h-3 text-white" />}
              </div>

              <div className="hidden md:block md:w-1/2 md:pl-12">
                <p className="text-gray-600 dark:text-gray-300 max-w-[400px]">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Timeline;