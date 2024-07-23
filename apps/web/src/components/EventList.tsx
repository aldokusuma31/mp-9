import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList: React.FC = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      axios.get('/events').then(response => {
        setEvents(response.data);
      });
    }, []);
  
    const deleteEvent = (id: number) => {
      axios.delete(`/events/${id}`).then(() => {
        setEvents(events.filter(event => event.id !== id));
      });
    };
  
    return (
      <div>
        <h1>Event List</h1>
        <Link to="/create">Create Event</Link>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.name} - {event.description}
              <Link to={`/update/${event.id}`}>Edit</Link>
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default EventList;