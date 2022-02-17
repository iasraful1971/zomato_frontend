import React from 'react';
import FilterItem from '../filterItem/filterItem';
import './filter.css';
const Filter = ({filterLists}) => {
    return (
        <div className='filters'>
            {filterLists &&
             filterLists.map((filter) => {
                return <FilterItem filter={filter} key={filter.id} />
            })}
        </div>
    );
};

export default Filter;