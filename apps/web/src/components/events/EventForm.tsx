import React, { useState, useEffect } from 'react';
import api from '../services/apiService';

interface Event {
  id?: number;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  price: number;
  availableSeats: number;
  ticket_type: 'free' | 'paid';
}

interface EventFormProps {
  eventId?: number;
}

const EventForm: React.FC<EventFormProps> = ({ eventId }) => {
  const [event, setEvent] = useState<Event>({
    name: '',
    description: '',
    location: '',
    date: '',
    time: '',
    price: 0,
    availableSeats: 0,
    ticket_type: 'free',
  });

  useEffect(() => {
    if (eventId) {
      api.get(`/events/${eventId}`)
        .then(response => {
          setEvent(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the event!', error);
        });
    }
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventId) {
      api.patch(`/events/${eventId}`, event)
        .then(response => {
          console.log('Event updated successfully');
        })
        .catch(error => {
          console.error('There was an error updating the event!', error);
        });
    } else {
      api.post('/events', event)
        .then(response => {
          console.log('Event created successfully');
        })
        .catch(error => {
          console.error('There was an error creating the event!', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={event.name}
        onChange={handleChange}
        placeholder="Event Name"
      />
      <input
        type="text"
        name="description"
        value={event.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="location"
        value={event.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={event.time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={event.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="availableSeats"
        value={event.availableSeats}
        onChange={handleChange}
        placeholder="Available Seats"
      />
      <select
        name="ticket_type"
        value={event.ticket_type}
        onChange={handleChange}
      >
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
