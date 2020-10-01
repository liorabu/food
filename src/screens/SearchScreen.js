import React, { useState, useEffect } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();


return <View>
    <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>we have found {results.length} results</Text>
    {/* <ResultsList title="Cost Effective"/>
    <ResultsList title="Bit Pricier"/>
    <ResultsList title="Big Spender"/> */}
</View>
}

// const styles = Stylesheet.creat({

// });

export default SearchScreen;