import React, { useState, useEffect } from 'react';

const literatureTypes = ['Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Fantasy'];

function LiteratureTypesRow() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [literatureData, setLiteratureData] = useState([]);

  // Assume literatureData is an array of objects with a 'category' property
  // Replace this with the actual data fetching logic
  useEffect(() => {
    // Simulated data fetching
    const fetchData = async () => {
      // Replace this with your actual API call or data source
      const response = await fetch('https://bookstores-production.up.railway.app/api/product');
      const data = await response.json();
      setLiteratureData(data);
    };

    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredLiterature = selectedCategory
    ? literatureData.filter(item => item.category === selectedCategory)
    : literatureData;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="mt-5 alert-primary fs-5" role="alert">
            {literatureTypes.map((type, index) => (
              <span
                key={index}
                className={`badge ${selectedCategory === type ? 'bg-primary' : 'bg-secondary'} me-3`}
                onClick={() => handleCategorySelect(type)}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
        
          <ul>
            {filteredLiterature.map((item, index) => (
              <li key={index}>{item.title} - {item.author}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LiteratureTypesRow;
