import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Info, 
  Calendar, 
  Link as LinkIcon, 
  Star, 
  Tag,
  X
} from 'lucide-react';

export const EventDetailModal = ({ event, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[105] flex items-center justify-center bg-black/70 p-4 overflow-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 md:h-[350px] object-cover rounded-t-2xl"
        />
        <div className="p-4 md:p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{event.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-500 w-5 h-5" />
                <span className="text-sm md:text-base dark:text-gray-300">Date: {event.date}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-green-500 w-5 h-5" />
                <span className="text-sm md:text-base dark:text-gray-300">Location: {event.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-purple-500 w-5 h-5" />
                <span className="text-sm md:text-base dark:text-gray-300">Participants: {event.participants}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Star className="text-yellow-500 w-5 h-5" />
                <span className="text-sm md:text-base dark:text-gray-300">Category: {event.category}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Tag className="text-red-500 w-5 h-5" />
                <span className="text-sm md:text-base dark:text-gray-300">
                  Registration: {event.registrationOpen ? 'Open' : 'Closed'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <LinkIcon className="text-indigo-500 w-5 h-5" />
                <a 
                  href={event.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline text-md md:text-base"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold dark:text-white">About the Event</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{event.fullDescription}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export const EventCard = ({ event, onDetailsClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-xl transform transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-96 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{event.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-sm truncate text-gray-700 dark:text-gray-300">{event.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-sm truncate text-gray-700 dark:text-gray-300">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-sm truncate text-gray-700 dark:text-gray-300">{event.participants}</span>
          </div>

          <button 
            onClick={() => onDetailsClick(event)}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DC143C] to-[#003893] text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
          >
            <Info className="w-4 h-4" />
            <span>Event Details</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};