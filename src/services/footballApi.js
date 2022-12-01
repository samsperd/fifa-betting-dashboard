import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const footballHeaders = {
    'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
    'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
}

const baseUrl = 'https://footapi7.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    headers: footballHeaders
})


export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getFootballRankings: builder.query({
            query: () => createRequest('/api/rankings/fifa')
        })
    })
})

export const { useGetFootballRankingsQuery } = footballApi

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://footapi7.p.rapidapi.com/api/rankings/fifa',
//   headers: {
//     'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
//     'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });