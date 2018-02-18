'use strict'
class AppSpotify extends React.Component {
    constructor() {
        super();
        
        this.state = {
            query:'',
            artists: [],
            albums: []
        }
    }

keepInput = (e) =>{
    this.setState({query: e.target.value})
}

getArtists = (e) => {
    e.preventDefault()
    spotifyApi.searchArtists(this.state.query)
    .then(artist => this.setState({artists: artist}))
}

getAlbums = (id) => {
    
    spotifyApi.retrieveAlbums(id)
    .then(album => this.setState({albums: album}))
}

getTracks = ()

   
    render(){
        return (
        <div>
            <nav className="navbar py-3">
                <a href="#" onclick="location.reload()"> <img src="img\Spotify_Logo_RGB_White.png" width={150} height={50} className="d-inline-block align-top ml-2" alt /> </a>
                <span className="navbar-brand mx-auto">Find your favorite music</span>
            </nav>
            <main className="container-fluid">
                {/* <h2 class="flex-column text-center p-5">Encuentra tu artista favorito</h2> */}
                <div id="search" className=" row">
                    <form className="row justify-content-center col-12" onSubmit={this.getArtists}>
                        <input className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold" type="text" placeholder="search for an artist" required autofocus onChange={this.keepInput}/>
                        <input className="btn-success btn-block rounded my-4 py-3 col-6 col align-self-center button" type="submit" defaultValue="Search" />
                    </form>
                    <button type="button" id="backToArtists" className="btn btn-success mx-auto rounded mb-3 button">Back to artists</button>
                </div>
                <section className="container-fluid col-12">
                <div id="listArtists" className=" card-columns">
                {this.state.artists.map((x) => {
                    
                 return  <div className="card col">
                            <div className="hovereffect">
                                <a href="#" className="text-center font-weight-bold text-light" id="{x.id}" data-id="{x.id}"> 
                                    <img className="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture" />
                                        <div className="card-body overlay"><h5 className="card-title">{x.name}</h5>
                                            <span className="info" onClick={(e) => {e.preventDefault(), this.getAlbums(x.id)}}>Show Albums</span>
                                        </div></a>
                            </div>
                        
                        </div>
                })}
                </div>
                <div id="listAlbums" className=" card-columns">
                {this.state.albums.map((x)=> {
                    return <div className="card col">
                        <div className="hovereffect">
                            <a href="#" className="text-center font-weight-bold text-light" id="{x.id}" data-id="{x.id}">
                                <img className="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture" />
                                <div className="card-body overlay"><h5 className="card-title">{x.name}</h5>
                                    <span className="info" onClick={(e) => {e.preventDefault(), this.getTrack(x.id)}}>Show Albums</span>
                                </div></a>
                        </div>

                    </div>
                })}
                
                </div>  
                    <div id="error">
                    </div>
                    <div className="modal fade" id="myPlayer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" data-dismiss="modal" id="exampleModalLongTitle" />
                                </div>
                                <div id="player" className="d-flex justify-content-center" />
                                <div className="modal-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        )    
}
}

ReactDOM.render(<AppSpotify/>, document.getElementById('root'))


// keepInput = (e) => {
//     this.setState({ query: e.target.value })
// }

// getArtists = (e) => {
//     e.preventDefault()
//     spotifyApi.searchArtists(this.state.query)
//         .then(artist => this.setState({ artists: artist }))


// }