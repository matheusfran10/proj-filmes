import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTFjZWJjNTg3MzNiMGY4YTJjZTIzODNhYjQyMTMwYSIsInN1YiI6IjYyZjI3ZWU2ODViMTA1MDA4NTI0ZGFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlwS2L7lvMmhzJ6FCt_zSNixiCt9eNgABClc4Yiq33w'
    }
})

export default apiFilmes