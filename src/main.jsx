import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Ourwork from './components/Our work.jsx';
import Services from './components/Services.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import TestimonialCarousel from './components/Testimonial.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="ourwork" element={<Ourwork />} />
      <Route path="services" element={<Services />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="testimonial" element={<TestimonialCarousel />} />
    </Route>
  )
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
