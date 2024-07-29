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
  const [results, setResults] = useState<Event[]>([]);

  const fetchSearchResults = (searchQuery: string) => {
    api.get(`/events/search?q=${searchQuery}`)
      .then(response => {
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
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search events..."
      />
      <ul>
        {results.map(event => (
          <li key={event.id}>
            {event.name} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;