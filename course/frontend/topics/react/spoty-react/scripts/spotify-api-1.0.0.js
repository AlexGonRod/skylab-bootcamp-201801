/**
 * Spotify API client.
 *
 * @version 1.0.0
 */

let spotifyApi;

(function () {
    "use strict";
    const baseUrl = "https://api.spotify.com/v1/"
    const token = 'BQBhqEjxIqh1MvnT5bX3aHKcY7QibN0VsRLpPz79SylVAxjmPUIkuW3OOyi0DsyouMQOiSS5pPlQXHMfAjDtG3LsLf3Q3X0KoaK278vQDP6rpROOvJbh8qp9WhBRnMZw3NZ2ZMeteXTBhK4q'
    const headers = { Authorization: 'Bearer ' + token }

    
    spotifyApi = {
        baseUrl,
        
        call: function (url) {
    
            return fetch(url , { headers })
        
                    .then(res => res.json())
                   // .then(data => resolve(data))
           
        },
        /**
         * Searches artists by matching a text.
         *
         * @param {String} query - The text to search.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */

        searchArtists: function (query) {
            
            let path = this.baseUrl + "search?type=artist&q=" + query
      
            return this.call(path).then(res =>  res.artists.items )
        },

        /**
         * Retrieve albums from an artist (by artist id).
         *
         * @param {String} artistId - The id of the artist to retrieve the albums from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveAlbums: function (artistId) {
            
            let path = this.baseUrl + "artists/" + artistId + "/albums"
            console.log(path)
            
            return this.call(path).then(res => { console.log(res)
                return res.items})

        },

        /**
         * Retrieve tracks from an album (by album id).
         *
         * @param {String} albumId - The id of the album to retrieve the tracks from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        retrieveTracks: function (albumId, handleResults, handleError) {
           
            
            let path = this.baseUrl + "albums/" + albumId + "/tracks"

            return this.call(path).then(res => res.items)           
        },

        /**
         * Get track from an album (by track id) to play it.
         *
         * @param {String} trackId - The id of the album to retrieve the tracks from.
         * @param {Function} handleResults - Handles the results.
         * @param {Function} handleError - Handles an error.
         */
        playTracks: function (trackId) {
           
            let path = this.baseUrl + "tracks/" + trackId
            
            return this.call(path)

            //.then(res => res.items)
            
         
        }
    };
})();
