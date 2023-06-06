import React, { useEffect, useState } from 'react';
import '../css/ItemCard.css'

const ItemCard = (data) => {

  return (
    <div className='itemCardContainer'>
        <div className='itemDetails'>
            <h2 className='itemTitle'>{data.data.title}</h2>
            <h2 className='itemDescription'>{data.data.description}</h2>
            <br></br>
            <h2 className='itemPrice'>${data.data.price.toFixed(2)}</h2>
        </div>
        <div className='itemPhotoContainer'>
            <img src={data.data.image} className='itemPhoto'></img>
        </div>
    </div>
  );
};

export default ItemCard;
