import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const footballHeaders = {
//     'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
//     'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
// }

//  https://app.sportdataapi.com/api/v1/soccer/matches?apikey=56b766b0-756f-11ed-a128-57065b0c40ea&season_id=3072

// https://app.sportdataapi.com/api/v1/status?apikey=56b766b0-756f-11ed-a128-57065b0c40ea

const baseUrl = 'https://app.sportdataapi.com/api/v1'
// const baseUrl = 'https://footapi7.p.rapidapi.com'

const createRequest = (url) => ({
    url,
    // headers: footballHeaders
})


export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        // getFootballRankings: builder.query({
        //     query: () => createRequest('/api/rankings/fifa')
        // }),
        getFootballMatches: builder.query({
            query: () => createRequest('/soccer/matches?apikey=56b766b0-756f-11ed-a128-57065b0c40ea&season_id=3072')
        })
    })
})

export const { useGetFootballMatchesQuery } = footballApi







// export const footballApi = createApi({
//     reducerPath: 'footballApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getFootballRankings: builder.query({
//             query: () => createRequest('/api/rankings/fifa')
//         }),
//         getFootballMatches: builder.query({
//             query: () => createRequest('/api/tournament/16/season/41087/matches/next/0')
//         })
//     })
// })





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