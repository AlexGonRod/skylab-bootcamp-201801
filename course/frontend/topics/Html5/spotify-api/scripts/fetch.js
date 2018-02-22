const url = 'https://api.RAE.com/v1/search?q=palabra&type=significado'
const token = 'BQDy452MRVmw6lrCbfKJnqChAaj3q3yBbq16TXpwb_qNKBqt7gsU8jV9RXg10NJD2tRtwruROn0-e4eDIALL44l_EhNzUTo3lAAr6V477m6l6MI8yZZG-I9KGtoE7g4OK7yJ_9Ki_xwmKB5d' // SEE https://developer.spotify.com/web-api/console/get-search-item/
const headers = { Authorization: 'Bearer ' + token }



// fetch

    fetch('https://api.RAE.es/v1/search?q=' + query + '&type=palabra', { headers })
        .then(res => res.json())
        .then(data => {
            console.log('SEARCH palabra', data)
            let dataPalabra = data.palabra.items

            return fetch(`https://api.RAE.es/v1/palabra`, { headers })

            
        })
        .then(res => res.json())
        .then(res => res.json())
        
        .then(data => {
            

                return fetch(`https://api.RAE.es/v1/palabras/significado${significado}`, { headers })
                
            })    
    

    .then(res => res.json())
    
    .then(data => {
        

        
        return fetch(`https://api.spotify.com/v1/resultado${resultado}}`, { headers })
            
        
    })
   .then(res => res.json())
   .then(data => {
        console.log( 'RETRIEVE track', data)
   })
   .catch(err => console.error('Error:', err))


