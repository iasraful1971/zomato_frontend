import React from 'react';
import './DeliveryItem.css';
const DeliveryItem = ({item}) => {
    return (
       <div>
            <div className='delivery-item-cover'>
            
            <img src={item.image} alt={item.name} className='delivery-item-image' />
        </div>
        <div className='delivery-item-title'>{item.name}</div>
       </div>
    );
};

export default DeliveryItem;