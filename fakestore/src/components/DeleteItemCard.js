import React from 'react';
import '../css/DeleteItemCard.css'

const DeleteItemCard = ({ deleteItem, data }) => {
    
    const handleDelete = () => {
        deleteItem(data.id);
    }

    return (
        <div className='deleteItemCardContainer'>
            <button onClick={handleDelete} className='deleteButton'>Delete This Product</button>
        </div>
    )
}

export default DeleteItemCard;