'use client'

import React, { useEffect, useState } from 'react';
import api from '../services/apiService';
import Link from 'next/link';


interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  price: number;
  availableSeats: number;
  ticket_type: 'free' | 'paid';
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    console.log(events)
  }, [events])

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

  return (
    <div className='pt-[5rem] pb-[3rem] bg-white'>
      <div>
        <Link href="/events/new">Create New Event</Link>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <Link href={`/events/${event.id}`}>View</Link>
              <Link href={`/events/${event.id}/edit`}>Edit</Link>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
