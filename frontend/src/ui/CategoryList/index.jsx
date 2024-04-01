import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchAllCategories } from '../../main';


export default function CategoryList() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchAllCategories()
      .then(data => setCategories(data))
      .catch(error => console.error('Erreur lors de la récupération des catégories:', error));
  }, []);

  return (
    <ul className='flex gap-1 px-24 pt-10'>
      {categories.map(category => (
        <li key={category.id} className='bg-colorBgBtnCate text-colorWhite py-3 px-5 hover:bg-colorBorderBlue cursor-pointer'>
          <Link to={'http://localhost:8090/category/'+category.id}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}