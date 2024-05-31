"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Card from './Card';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/events', { title, description, date})
      .then((response: any) => {
         // Clear the form
        setTitle('');
        setDescription('');
        setDate('');
      })
      .catch((error: any) => console.error('Error creating event:', error));
  };

 return (
    <div className='flex flex-col justify-center items-center m-4 p-4'>
    <div className='flex '>
    <form onSubmit={handleSubmit}>
      <div >
        <div className="badge badge-primary badge-outline">Title</div>
        <input type="text" placeholder="Title" 
        className="input input-bordered input-primary w-full max-w-xs m-2 p-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
      <div className="badge badge-primary badge-outline">Description</div>
        <input type="text" placeholder="Description" 
        className="input input-bordered input-primary w-full max-w-xs m-2 p-2" 
         value={description} onChange={(e) => setDescription(e.target.value)}
        />

       
      </div>
      <div>
      <div className="badge badge-primary badge-outline">Date</div>
        <input type="date"  placeholder="Date" 
        className="input input-bordered input-primary w-full max-w-xs m-2 p-2" 
         value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-secondary m-2 p-2">Create Event</button>
    </form>
    </div>

     
    </div>
  );
};

export default EventForm;


