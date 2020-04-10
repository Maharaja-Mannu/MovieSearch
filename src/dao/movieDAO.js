const express = require('express')
const Movie = require('../models/movie')

class MovieDAO {
    
    static async getMovie({filters = null, page = 0, moviesPerPage = 20} = {}){
        // get search category and it's value
        let query
        if (filters) {    
            let searchType
            try{
                searchType = Object.keys(filters)[0]
            }catch(e){
                console.error(`No search keys specified ${e}`)
            }
            // set filters
            switch(searchType){
                case 'title':
                    query = {'title': filters['title']}
                    //query = {$text: { $search: filters.title}}
                    query = {'title': { $regex: `${filters.title}`, $options: 'i'}}

                    break
                case 'cast':
                    query = {'cast': { $in: [ filters['cast'] ]}}
                    break
                case 'year':
                    query = {'year': parseInt(filters['year'], 10)}
                    break
                case 'languages':
                    let languages = filters.languages.split(',')
                    query = {'languages': { $in: languages }}
                    break
                default:
                    // do nothing 
            }
            if ('languages' in filters && searchType !== 'languages') {
                let languages = filters.languages.split(',')

                query = {$and: [query, {'languages': { $in: languages}}]}
            }
        }

        try {
          const moviesList = await Movie.find(query || {})
          .limit(moviesPerPage)
          .skip(page * moviesPerPage)
          .select('poster')
          .sort({'tomatoes.viewer.rating': -1, 'imdb.rating': -1 })
          // can also use object notation in select {runtime: 0, writers: 0}
          //const totalNumMovies = page === 0 ? await Movie.countDocuments(query) : 0
          const totalNumMovies =await Movie.countDocuments(query)

          return { moviesList, totalNumMovies }
        } catch (e) {
          console.error(`Unable to issue find command, ${e}`)
          return { moviesList: [], totalNumMovies: 0 }
        }
    }
}
module.exports = MovieDAO