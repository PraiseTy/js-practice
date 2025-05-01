import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MealFinder from './MealFinder.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MealFinder />
  </StrictMode>
);
