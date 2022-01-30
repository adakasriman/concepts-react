import React, { useState, useEffect } from 'react';

export const useFetch = (options) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("useEffect useState");
        if (options.url) {
            fetch(options.url)
                .then(res => res.json())
                .then(result => {
                    options.onSuccess?.(result);
                    setData(result)
                });
        }
    }, [options.url, options.onSuccess])

    return {
        data,
    }
}