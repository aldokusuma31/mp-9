'use client'

import React, { useEffect, useState } from 'react';
import api from './services/apiService';
import Link from 'next/link';
import BlogCard from './Helper/BlogCard';

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

const Blog = () => {
    const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/events/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(()=> {
    console.log(events)
    }, [events])

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/events/${id}`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };

    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='text-center'>
                <p className='heading__mini'>My Blog</p>
                <h1 className='heading__primary'>
                    Latest <span className='text-yellow-300'>Blog</span> & News
                </h1>
            </div>
            <div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]'>
                <div>
                    <BlogCard
                        title="Fullstack Developer Journey"
                        comment="4"
                        date="1 June 2024"
                        image="/images/music.png"
                    />
                </div>
                <div>
                    <BlogCard
                        title="Blogging Pictures! Photo by Kenny Eliason on Unsplash"
                        comment="10"
                        date="4 June 2024"
                        image="/images/b2.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog