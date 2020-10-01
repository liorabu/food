import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer r1TARVbUhCQ7GaPH5oq7QOoHzE4b8B3pcTXt6d2H3MSiFs5aSjgvUqOYQ92pBq6En_nLOEnnSteYRLM3PU_MHbEt30gDP0U3Ygd44RF416-X05BRtmsYmsucpASKXnYx'
    }
});