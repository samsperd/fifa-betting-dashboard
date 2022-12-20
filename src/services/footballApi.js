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
        }),
        getFootballMatches: builder.query({
            query: () => createRequest('/api/tournament/16/season/41087/matches/last/0')
        }),
        getFootballTeamLogo: builder.query({
            query: () => createRequest(`/api/team/2672/image`)
        }),
        getFootballMatchOdds: builder.query({
            query: () => createRequest(`/api/match/10230640/odds`)
        }),
    })
})


export const { useGetFootballMatchesQuery, useGetFootballTeamLogoQuery, useGetFootballMatchOddsQuery } = footballApi







