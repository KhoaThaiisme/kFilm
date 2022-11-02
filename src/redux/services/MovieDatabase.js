// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const movieDatabaseApi = createApi({
//     reducerPath: 'movieDatabaseApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://movies-app1.p.rapidapi.com/api',
//         prepareHeaders: (headers) => {
//             headers.set('X-RapidAPI-Key', 'b62049e803msh9f2a4f5bdfb53b9p15a5cbjsn9cf3121cc0d4')

//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         getMoviesList: builder.query({ query: () => '/movies'})
//     })
// })

// export const {
//     useGetMoviesListQuery,
// } = movieDatabaseApi