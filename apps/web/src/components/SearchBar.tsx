'use client'

import React, { useState, useCallback, useEffect } from 'react';
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
  const [showPopover, setShowPopover] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const fetchSearchResults = async (searchQuery: string) => {
    try {
      const response = await api.get(`/events/events/search?q=${searchQuery}`);
      console.log(response.data);
      setResults(response.data);
      setShowPopover(true);

      // Set a timer to hide the popover after a short delay
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setShowPopover(false);
      }, 2000);
      setTimer(newTimer);
    } catch (error) {
      console.error('There was an error fetching the search results!', error);
    }
  };

  const debouncedFetchSearchResults = useCallback(debounce(fetchSearchResults, 300), []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    if (value) {
      debouncedFetchSearchResults(value);
    } else {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup the timer on component unmount
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search events..."
        className="search-bar-input"
      />
      {showPopover && (
        <div className="search-popover">
          {results?.data.map((event: Event) => (
            <div key={event.id} className="search-result">
              <strong>{event.name}</strong> - {event.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;