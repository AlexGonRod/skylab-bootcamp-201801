

$(document).ready(function () {
    'use strict'


    $('form').submit(function (e) {
        e.preventDefault();

        var query = $('#find').val();
        $('.cardArtist').empty()
        $('.cardAlbum').empty()
        $('.cardTrack').empty()
        $('.cardArtist').show()
        $('.cardAlbum').hide()
        $('.cardTrack').hide()
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + query + "&type=artist",
            timeout: 2000,
            type: 'GET',
            headers: {
                "Authorization": "Bearer BQB1F0Ys3HoR7Hiz5BH-qrlEWqCvHC-V6BvdlbvU4shm829_Eqrz9ysfB_oXijMCIfRGkc9CwyI0PWVCLZneWx8L0u558O6Szu9Ecu8VMxf3If7u3g4MQYl42nj8qeLogubnHCcUKer51ya3"
            },

            success: function (artist) {

                var Artist = artist.artists.items;

                var list = '';


                Artist.forEach(function (A) {

                    if (A.images.length != 0) {
                        list = '<div class="card bg-dark text-white"><div class="card-mask"><img class="card-image" src="' + A.images[0].url + '" alt="Card image cap"><div class="card-img-overlay"><a href="#" id=' + A.id + '><h5 class="card-title">' + A.name + '</h5></a></div></div></div>';
                    } else {
                        list = '<div class="card bg-dark text-white"><div class="card-mask"><img class="card-image" src="img/Spotify_Icon.png" alt="Card image cap"><div class="card-img-overlay"><a href="#" id=' + A.id + '><h5 class="card-title">' + A.name + '</h5></a></div></div></div>';
                    }
                    $('form').trigger("reset");
                    $('.cardArtist').append(list);

                });
            }
        });

        $('.cardArtist').on('click', 'a', function (e) {
            e.preventDefault();
            var id = ($(this).attr('id'));

            $.ajax({
                url: "https://api.spotify.com/v1/artists/" + id + "/albums",
                type: 'GET',
                headers: {
                    "Authorization": "Bearer BQB1F0Ys3HoR7Hiz5BH-qrlEWqCvHC-V6BvdlbvU4shm829_Eqrz9ysfB_oXijMCIfRGkc9CwyI0PWVCLZneWx8L0u558O6Szu9Ecu8VMxf3If7u3g4MQYl42nj8qeLogubnHCcUKer51ya3"
                },
                timeout: 1000,

                success: function (album) {

                    var listAlbum = '';
                    var showAlbums = album.items;


                    showAlbums.forEach(function (e) {
                        if (e.images.length != 0) {
                            listAlbum += '<div class="card bg-dark text-white"><div class="card-mask"><img class="card-image" src="' + e.images[0].url + '" alt="Card image cap"><div class="card-img-overlay"><a href="#" id=' + e.id + '><h5 class="card-title">' + e.name + '</h5></a></div></div></div>';
                        } else {
                            listAlbum += '<div class="card bg-dark text-white"><div class="card-mask"><img class="card-image" src="img/Spotify_Icon.png" alt="Card image cap"><div class="card-img-overlay"><a href="#" id=' + e.id + '><h5 class="card-title">' + e.name + '</h5></a></div></div></div>';
                        }
                        // listAlbum += '<div class="card"><img class="card-img-top" src="' + e.images[0].url + '" alt="Card image cap"><div class="card-body"><a href="#" id=' + e.id + '><h5 class="card-title">' + e.name + '</h5></a><p class="card-text"></p></div></div>';

                    });
                    $('.cardAlbum').html(listAlbum);
                    $('.cardAlbum').show();
                    $('.cardArtist').hide();

                }
            });
        });


        $('.cardAlbum').on('click', 'a', function (e) {
            e.preventDefault();
            var id = ($(this).attr('id'));

            $.ajax({
                url: "https://api.spotify.com/v1/albums/" + id + "/tracks",
                type: 'GET',
                headers: {
                    "Authorization": "Bearer BQB1F0Ys3HoR7Hiz5BH-qrlEWqCvHC-V6BvdlbvU4shm829_Eqrz9ysfB_oXijMCIfRGkc9CwyI0PWVCLZneWx8L0u558O6Szu9Ecu8VMxf3If7u3g4MQYl42nj8qeLogubnHCcUKer51ya3"
                },
                timeout: 1000,

                success: function (track) {

                    var listTrack = '';
                    var showTracks = track.items;


                    showTracks.forEach(function (t) {

                        //  listTrack += '<div class="card"><div class="card-body"><a href="#" id=' + t.id + '><h5 class="card-title">' + t.name + '</h5></a><p class="card-text"></p></div></div>';
                        listTrack += '<div class="card"><a href="#" id=' + t.id + '><h5 class="card-title">' + t.name + '</h5></a></div>';

                    });
                    $('.cardTrack').html(listTrack);
                    $('.cardTrack').show();
                    $('.cardAlbum').hide();

                }
            });
        });

        $('.cardTrack').on('click', 'a', function (e) {
            e.preventDefault();
            var id = ($(this).attr('id'));

            $.ajax({
                url: "https://api.spotify.com/v1/tracks/" + id,
                type: 'GET',
                headers: {
                    "Authorization": "Bearer BQB1F0Ys3HoR7Hiz5BH-qrlEWqCvHC-V6BvdlbvU4shm829_Eqrz9ysfB_oXijMCIfRGkc9CwyI0PWVCLZneWx8L0u558O6Szu9Ecu8VMxf3If7u3g4MQYl42nj8qeLogubnHCcUKer51ya3"
                },
                timeout: 1000,

                success: function (play) {

                    var listPlay = '';
                    var trackPlay = play.preview_url;

                    listPlay = '<audio controls autoplay><source src="' + trackPlay + '" type="audio / mpeg" /></audio>';

                    $('.modal-title').text(play.name);
                    $('.modal-body').html(listPlay);
                    $('#modal').show();

                    $('#modal').on('hidden.bs.modal', function () {
                        //cuando el modal es ocultado, paro el reproductor
                        $('#audioplayer').get(0).pause();
                        $('#audioplayer').get(0).currentTime = 0;
                    })
                }

            });
        });

    });
})
