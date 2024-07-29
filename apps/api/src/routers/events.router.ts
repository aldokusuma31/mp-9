import eventsController, { EventsController } from '@/controllers/events.controller';
import express, { Router } from 'express';
import { Database } from 'sqlite3';

const router = express.Router();
const db = new Database(':memory:'); // Use an in-memory SQLite database for simplicity

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    location TEXT,
    date TEXT,
    time TEXT,
    price INTEGER,
    availableSeats INTEGER,
    ticket_type TEXT
  )`);
});

// Search Events
router.get('/search', (req: any, res: any) => {
  const query = req.query.q;
  db.all('SELECT * FROM events WHERE name LIKE ? OR description LIKE ?', [`%${query}%`, `%${query}%`], (err: any, rows: any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

export class EventsRouter {
  private router: Router;
  private eventsController: EventsController;

  constructor() {
    this.eventsController = new EventsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/create-event', this.eventsController.createEventController);
    this.router.get('/events', this.eventsController.getAllEventsController);
    this.router.get('/event/:id', this.eventsController.getEventByIdController);
    this.router.patch('/update-event/:id', this.eventsController.updateEventByIdController);
    this.router.delete('/delete-event/:id', this.eventsController.deleteEventByIdController);
  }

  getRouter(): Router {
    return this.router;
  }
}

export default new EventsRouter().getRouter();
