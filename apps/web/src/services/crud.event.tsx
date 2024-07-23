const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data storage (replace with your database logic)
let events = [
  { id: 1, name: "Event 1", description: "Description 1", price: 100, date: "2024-07-20", time: "18:00", location: "Location 1", available_seats: 100, ticket_type: "paid" }
];

// Read all events
app.get('/events', (req: any, res: any) => {
  res.json(events);
});

// Create a new event
app.post('/events', (req: any, res: any) => {
  const newEvent = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Update an event
app.put('/events/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id, 10);
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...req.body };
    res.json(events[index]);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Delete an event
app.delete('/events/:id', (req: any, res: any) => {
  const id = parseInt(req.params.id, 10);
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
