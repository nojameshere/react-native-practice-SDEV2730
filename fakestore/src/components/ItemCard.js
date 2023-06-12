import React, { useEffect, useState } from 'react';
import '../css/ItemCard.css'
import DeleteItemCard from './DeleteItemCard.js'

const ItemCard = ({ data, deleteItem }) => {

  return (
    <div className='itemCardContainer'>
        <div className='itemCardSubContainer'>
            <div className='itemDetails'>
                <h2 className='itemTitle'>{data.title}</h2>
                <h2 className='itemDescription'>{data.description}</h2>
                <br></br>
                <h2 className='itemPrice'>${data.price.toFixed(2)}</h2>
            </div>
            <DeleteItemCard deleteItem={deleteItem} data={data}/>
        </div>
        <div className='itemPhotoContainer'>
            <img src={data.image} className='itemPhoto'></img>
        </div>
    </div>
  );
};

export default ItemCard;
