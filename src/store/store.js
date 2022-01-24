import { createStore } from 'vuex'

const store = createStore({
    
    state:{
        movies: []
    },

    mutations:{
        setMovies(state,payload){
            state.movies = payload
        }
    },

    actions:{
        getMovies({commit}){
            return new Promise((resolve,reject) => {
                try {
                    fetch(import.meta.env.VITE_MOVIE_URL_API+'/movie/popular?api_key='+import.meta.env.VITE_MOVIE_KEY+'&language=es')
                    .then(response => response.json())
                    .then(response => {
                        commit('setMovies',response.results)
                        resolve({state : 1})
                    }) 
                } catch (error) {
                    throw error
                }
            })
        },

        getMoviesTopRated({commit}){
            return new Promise((resolve,reject) => {
                try {
                    fetch(import.meta.env.VITE_MOVIE_URL_API+'/movie/top_rated?api_key='+import.meta.env.VITE_MOVIE_KEY+'&language=es')
                    .then(response => response.json())
                    .then(response => {
                        commit('setMovies',response.results)
                        resolve({state : 1})
                    }) 
                } catch (error) {
                    throw error
                }
            })
        },
    },

    getters:{
        movies(state){
            return state.movies
        }
    }
})


export default store