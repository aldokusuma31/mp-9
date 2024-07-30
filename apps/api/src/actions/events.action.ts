import { events_ticket_type } from '@prisma/client';
import prisma from '../prisma';

class EventAction {
  public async createEvent(
    organizerId: number,
    name: string,
    description: string | null,
    location: string,
    date: Date,
    time: Date,
    ticket_type: events_ticket_type,
    price: number,
    availableSeats: number,
    promotion: number | null
  ) {
    try {
      const event = await prisma.events.create({
        data: {
          organizerId,
          name,
          description,
          location,
          date,
          time,
          ticket_type,
          price,
          availableSeats,
          promotion,
        },
      });
      return event;
    } catch (error) {
      throw error;
    }
  }

  public async getAllEvents() {
    try {
      const events = await prisma.events.findMany();
      return events;
    } catch (error) {
      throw error;
    }
  }

  public async getEventById(id: number) {
    try {
      const event = await prisma.events.findUnique({
        where: {
          id,
        },
      });
      if (!event) throw new Error('Event not found');
      return event;
    } catch (error) {
      throw error;
    }
  }

  public async updateEventById(
    id: number,
    name: string,
    description: string | null,
    location: string,
    date: Date,
    time: Date,
    ticket_type: events_ticket_type,
    price: number,
    availableSeats: number,
    promotion: number | null
  ) {
    try {
      const event = await prisma.events.update({
        where: {
          id,
        },
        data: {
          name,
          description,
          location,
          date,
          time,
          ticket_type,
          price,
          availableSeats,
          promotion,
        },
      });
      return event;
    } catch (error) {
      throw error;
    }
  }
  
  public async deleteEventById(id: number) {
    try {
      const event = await prisma.events.delete({
        where: {
          id,
        },
      });
      return event;
    } catch (error) {
      throw error;
    }
  }
}

export default new EventAction();
