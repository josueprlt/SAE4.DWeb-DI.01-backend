import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import Research from './routes/research.jsx';
import Category from './routes/category.jsx';
import Film from './routes/film.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';

import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/research',
    element: <Research />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/category/:categoryId',
    element: <Category />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/film/:movieId',
    element: <Film />,
    errorElement: <ErrorPage />,
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}


export async function fetchAllCategories() {
  let response = await fetch("http://localhost:8080/api/categories");
  let data = await response.json();
  return data;
}

export async function fetchAllMovies() {
  let response = await fetch("http://localhost:8080/api/movies");
  let data = await response.json();
  return data;
}

export async function fetchResearch(value) {
  let response = await fetch("http://localhost:8080/api/research/" + value);
  let data = await response.json();
  return data;
}

export async function fetchCarousel() {
  let response = await fetch("http://localhost:8080/api/carousel");
  let data = await response.json();
  return data;
}

export async function fetchByCategory(id) {
  let response = await fetch("http://localhost:8080/api/category/"+id);
  let data = await response.json();
  return data;
}

export async function fetchByMovie(id) {
  let response = await fetch("http://localhost:8080/api/movie/"+id);
  let data = await response.json();
  return data;
}