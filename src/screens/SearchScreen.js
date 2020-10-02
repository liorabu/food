import React, { useState, useEffect } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
// import { I18nManager } from 'react-native';

const SearchScreen = () => {
    // useEffect(()=>{
    //     I18nManager.forceRTL(true);
    // });
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
   
  
    const filterResultsByPrice = (price) => {
        return results.filter(results=>{
            return results.price === price;
        })

    };

return <View>
    <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>we have found {results.length} results</Text>
    <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
    <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
    <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
</View>
}

// const styles = Stylesheet.creat({

// });

export default SearchScreen;