import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResaults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResaults(response.data.businesses);
        } catch (err) {
            setErrorMessage('something went wrong!');
        }
    }
    useEffect(() => {
        searchApi('pizza')
    }, []);

    return [searchApi, results, errorMessage];
};