import React, { useState } from 'react';

function WithArray(props) {
    const [items, setitem] = useState([]);

    const addNumber = () => {
        setitem([...items, {
            id: items.length,
            value: items.length + 1
        }])
    }
    return (
        <div>
            <button onClick={addNumber}>random number</button>

            <div>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item.value}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    );
}

export default WithArray;