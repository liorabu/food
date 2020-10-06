import React, { useState, useEffect } from 'react';
import { View, Text, Stylesheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();


    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        })

    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    navigation={navigation}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    navigation={navigation}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    navigation={navigation}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    )
}

// const styles = Stylesheet.creat({

// });

export default SearchScreen;