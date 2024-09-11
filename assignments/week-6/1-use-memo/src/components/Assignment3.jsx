import React, { useState}from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent
import { useMemo } from 'react';

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(()=>{
        let totalValue = 0;
        // Your code ends here
        for(let i = 0;i < items.length;i++){
            totalValue = totalValue + items[i].value;
        }
        return totalValue;

    },[items]);
    
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
