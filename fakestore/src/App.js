import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        const dataArray = Array.isArray(jsonData) ? jsonData : Object.values(jsonData);
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fake Store Products</h1>
      <SearchBar data={data} searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default App;
