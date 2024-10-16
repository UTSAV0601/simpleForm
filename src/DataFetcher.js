// src/DataFetcher.js
import React from 'react';
import useAxiosFetch from './useAxiosFetch';

const DataFetcher = () => {
    const { data, loading, error } = useAxiosFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
