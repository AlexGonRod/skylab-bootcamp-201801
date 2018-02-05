const url = 'https://api.spotify.com/v1/search?q=madonna&type=artist'
const token = 'BQDy452MRVmw6lrCbfKJnqChAaj3q3yBbq16TXpwb_qNKBqt7gsU8jV9RXg10NJD2tRtwruROn0-e4eDIALL44l_EhNzUTo3lAAr6V477m6l6MI8yZZG-I9KGtoE7g4OK7yJ_9Ki_xwmKB5d' // SEE https://developer.spotify.com/web-api/console/get-search-item/
const headers = { Authorization: 'Bearer ' + token }



// fetch

    fetch('https://api.spotify.com/v1/search?q=' + query + '&type=artist', { headers })
        .then(res => res.json())
        .then(data => {
            console.log('SEARCH artists', data)
            
            
            let dataArtist = data.artists.items

           

                return fetch(`https://api.spotify.com/v1/artists/${artist.id}/albums`, { headers })

            
        })
        .then(res => res.json())
        .then(res => res.json())
        .catch(err => console.error('Error:', err)) // WARN!!!
        .then(data => {
            // console.log( 'RETRIEVE albums', data)

                return fetch(`https://api.spotify.com/v1/albums/${album.id}/tracks`, { headers })
                
            })    
    

    .then(res => res.json())
    .catch(err => console.error('Error:', err)) // WARN!!!
    .then(data => {
        // console.log( 'RETRIEVE tracks', data)

        
        return fetch(`https://api.spotify.com/v1/tracks/${track.id}`, { headers })
            
        
    })
   .then(res => res.json())
   .then(data => {
        console.log( 'RETRIEVE track', data)
   })
   .catch(err => console.error('Error:', err))


