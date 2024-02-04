import React, { useState } from 'react';
import './MealTypes.css'; // Import your CSS file

const MealTypes = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const videos = [
    { id: 1, title: 'Movie 1', category: 'movies' },
    { id: 2, title: 'Movie 2', category: 'movies' },
    { id: 3, title: 'Movie 3', category: 'movies' },
    { id: 4, title: 'TV Show 1', category: 'tvShows' },
    { id: 5, title: 'TV Show 2', category: 'tvShows' },
    { id: 6, title: 'TV Show 3', category: 'tvShows' },
    // Add more videos with different categories as needed
  ];

  const filteredVideos = videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="amazon-prime-header">
      <h1>Prime Video</h1>
      <div className="category-tabs">
        <button
          className={selectedCategory === 'movies' ? 'active' : ''}
          onClick={() => handleCategoryChange('movies')}
        >
          Movies
        </button>
        <button
          className={selectedCategory === 'tvShows' ? 'active' : ''}
          onClick={() => handleCategoryChange('tvShows')}
        >
          TV Shows
        </button>
        {/* Add more category tabs as needed */}
      </div>
      <div className="video-list">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item">

            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealTypes;