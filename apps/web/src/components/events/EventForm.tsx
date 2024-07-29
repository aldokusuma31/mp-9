import React, { useState } from 'react';
import api from '../services/apiService';

const EventForm: React.FC<{ eventId?: number }> = ({ eventId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [ticketType, setTicketType] = useState('free');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const event = { name, description, location, date, time, price, availableSeats, ticket_type: ticketType };

    try {
      if (eventId) {
        await api.put(`/events/${eventId}`, event);
      } else {
        await api.post('/events', event);
      }
      alert('Event saved successfully');
    } catch (error) {
      console.error('Error saving event', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <input type="number" placeholder="Available Seats" value={availableSeats} onChange={(e) => setAvailableSeats(Number(e.target.value))} />
      <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;
