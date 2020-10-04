import React from 'react';
import {View, Image , Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <Image source={{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginRight :15,
        // marginEnd:7.5,
        // marginLeft:15,
        // marginStart:7.5,
        // marginEnd: 10
    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
     name:{
         fontWeight:'bold',
     }
});

export default ResultsDetail;