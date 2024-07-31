'use client'

import React, { useState, useCallback } from 'react';
import debounce from 'debounce';
import api from './services/apiService';

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

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>(null);

  const fetchSearchResults = (searchQuery: string) => {
    api.get(`/events/events/search?q=${searchQuery}`)
      .then(response => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the search results!', error);
      });
  };

  const debouncedFetchSearchResults = useCallback(debounce(fetchSearchResults, 300), []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    debouncedFetchSearchResults(value);
    // console.log(value);
  };

  return (
    <div className='relative'>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search events..."
      />
      {results&&<ul className='absolute top-16'>
        {results?.data.map((event: Event) => (
          <li className='nav__link' key={event.id}>
            {event.name} - {event.description}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default SearchBar;