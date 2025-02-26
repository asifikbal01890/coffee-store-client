import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    // const params = useParams()
    // const id = params.id
    // console.log(id);
    const coffeeInfo = useLoaderData()
    console.log(coffeeInfo);
    
    
    return (
        <div>
            
        </div>
    );
};

export default CoffeeDetails;