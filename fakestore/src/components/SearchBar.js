import React, { useState } from 'react';
import '../css/SearchBar.css';
import ItemCard from './ItemCard';

const SearchBar = ({ searchValue, setSearchValue, data }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
  }

  const shouldDisplayButton = searchValue.length > 0;

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <div className='searchBarContainer'>
        <input type='text' value={searchValue} placeholder='Search Products' onChange={handleInputChange} />
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
      </div>
      <div className='items'>
        {filteredData.map((data, index) => (
          <ItemCard key={index} data={data} searchValue={searchValue} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
