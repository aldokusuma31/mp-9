import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const UpdateEvent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState({ name: '', description: '', price: '', date: '', time: '', location: '', available_seats: '', ticket_type: '' });
    const history = useHistory();
  
    useEffect(() => {
      axios.get(`/events/${id}`).then(response => {
        setEvent(response.data);
      });
    }, [id]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEvent({ ...event, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      axios.put(`/events/${id}`, event).then(() => {
        history.push('/');
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={event.name} onChange={handleChange} placeholder="Name" />
        <input name="description" value={event.description} onChange={handleChange} placeholder="Description" />
        <input name="price" value={event.price} onChange={handleChange} placeholder="Price" />
        <input name="date" value={event.date} onChange={handleChange} placeholder="Date" />
        <input name="time" value={event.time} onChange={handleChange} placeholder="Time" />
        <input name="location" value={event.location} onChange={handleChange} placeholder="Location" />
        <input name="available_seats" value={event.available_seats} onChange={handleChange} placeholder="Available Seats" />
        <input name="ticket_type" value={event.ticket_type} onChange={handleChange} placeholder="Ticket Type" />
        <button type="submit">Update</button>
      </form>
    );
  };

export default UpdateEvent;