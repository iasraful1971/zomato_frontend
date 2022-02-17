import React from 'react';
import { restaurants } from '../../data/restaurent';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import Filter from '../common/filter/filter/Filter';
import './delivery.css';
import DeliveryCollections from './DeliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/topBrands';


const deliveryFilters = [
    {
        id:1,
        icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title: 'Filters'
    },
    {
        id:2,   
        title: 'Rating 4.9+'
    },
    {
        id:3, 
        title: 'Save and Hygienic'
    },
    {
        id:4,
        title: 'Pure Veg'
    },
    {
        id:5,
         icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
        title: 'Delivery Time'
    },
    {
        id:6,
        title: 'Great Offers'
    },
]
const restaurantList= restaurants;

const Delivery = () => {
    return (
        <div>
        <div className='max-width'>
            <Filter filterLists={deliveryFilters} />
        </div>
        <DeliveryCollections/>
        <TopBrands/>
        <ExploreSection  list={restaurantList} collectionName="Delivery Restaurants in Dhaka" />
        </div>
    );
};

export default Delivery;