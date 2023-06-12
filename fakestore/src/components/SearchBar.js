import React, { useState, useEffect } from 'react';
import '../css/SearchBar.css';
import ItemCard from './ItemCard';

const SearchBar = ({ searchValue, setSearchValue, data }) => {
  const [updatedData, setUpdatedData] = useState(data);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
  }
  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const deleteItem = (itemID) => {
    const updatedData = data.filter(item => item.id !== itemID);
    setUpdatedData(updatedData);
  }

  const shouldDisplayButton = searchValue.length > 0;

  const filteredData = updatedData.filter((item) => {
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
          <ItemCard key={index} data={data} searchValue={searchValue} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
