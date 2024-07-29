import React, { useState, useEffect } from 'react';
import api from '../services/apiService';

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
    api.get('/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    api.delete(`/events/${id}`)
      .then(response => {
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the event!', error);
      });
  };

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name}
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;