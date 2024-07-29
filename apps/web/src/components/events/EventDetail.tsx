import React, { useEffect, useState } from 'react';
import api from '../services/apiService';

interface EventDetailProps {
  eventId: number;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
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
