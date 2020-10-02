import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

export default ResultsList = ({title,results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                horizontal={true}
                // style={{ transform: [{ scaleX: -1 }] }}
                // showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return <Text>{item.name}</Text>;
                }}
            />
        </View>
   );
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});