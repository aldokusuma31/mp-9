import React, { useState, useEffect } from 'react';
import api from '../services/apiService';

interface EventDetailProps {
  eventId: number;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    api.get(`/events/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the event!', error);
      });
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.price}</p>
      <p>{event.availableSeats}</p>
      <p>{event.ticket_type}</p>
    </div>
  );
};

export default EventDetail;
