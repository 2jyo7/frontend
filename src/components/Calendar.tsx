"use client"
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';
import Card from './Card';

const Calendar = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/events')
      .then((response : any )=> setEvents(response.data))
      
      .catch((error: any) => console.error('Error fetching events:', error));
  }, []);
console.log(events);

  const handleDateClick = (arg: any) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  return (
    <div className='grid grid-cols-2 m-4 p-4 border border-gray-800 shadow-md rounded'>
      <div className='m-4 px-6 py-2'>
       <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
      </div>
    <div className='grid mx-auto my-4 px-6 py-4'>
      {
        events.map((event: any) => (
          <Card key={event._id}
           title={event.title}
            description={event.description}
            date={event.date} />
        ))
      }
    </div>
    </div>
    
  );
};

export default Calendar;
