"use client"
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {initiatives} from '@/data/initiatives.js';
import { EventCard, EventDetailModal } from './Events';

const events= initiatives;
const Initiatives = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <div className="lg:pb-32 pb-8 pt-8 lg:pt-32">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
               Events
              </h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
  {events.map(event => (
    <div key={event.id} className="flex">
      <EventCard 
        event={event} 
        onDetailsClick={setSelectedEvent} 
        className="w-full h-full" 
      />
    </div>
  ))}
</div>
        <AnimatePresence>
          {selectedEvent && (
            <EventDetailModal 
              event={selectedEvent} 
              onClose={() => setSelectedEvent(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Initiatives;