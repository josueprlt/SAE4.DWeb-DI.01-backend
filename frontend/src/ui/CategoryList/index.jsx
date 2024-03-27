import React, { useState, useEffect } from 'react';

async function fetchAllCategories() {
  let response = await fetch("http://localhost:8080/api/categories");
  let data = await response.json();
  return data;
}

function CategoryList() {
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
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;