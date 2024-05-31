"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const GoogleCalendarIntegration = () => {
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/auth/google/callback')
      .then(response => setAuthUrl(response.data.url))
      .catch(error => console.error('Error fetching Google auth URL:', error));
  }, []);

  return (
    <div className='flex flex-col justify-center'>
      <h2 className='text-2xl font-semibold 
       text-blue-700'>Google Calendar Integration</h2>
      {authUrl ? (
        <Link href={authUrl}>Connect to Google Calendar</Link>
      ) : (
        <p className='text-2xl font-semibold 
        text-blue-700'>Loading...</p>
      )}
    </div>
  );
};

export default GoogleCalendarIntegration;
