import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

export default ResultsList = ({title,results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    // return <Text>{item.name}</Text>;
                    return <ResultsDetail result={item}/>;
                }}
            />
        </View>
   );
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        // marginStart:15,
        marginRight:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});