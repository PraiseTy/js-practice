import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MovieBooking from './MovieBooking.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieBooking />
  </StrictMode>
);
