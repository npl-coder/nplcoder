"use client"
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {initiatives} from '@/data/initiatives.js';
import { EventCard, EventDetailModal } from './Events';

const events= initiatives;
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <div className="">
      <div className="container mx-auto px-4">
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pb-10">
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

export default EventsPage;