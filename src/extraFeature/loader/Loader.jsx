import React from 'react';
import ReactCircularLoader from 'react-circular-loader';

const Loader = () => {
    return (
        <div>
			<ReactCircularLoader 
                primaryColor="#0D47A1" 
                secondaryColor="#e8f4f8" 
                diameter="100px" 
                primaryWidth="3px" 
                secondaryWidth="5px"/>
		</div>
    );
};

export default Loader;

