

$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();

    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        success: function (result) {
            console.log(result);
            
            var list = '';

            result.forEach(function (v) {
        
                if(v.style){
                    var desc = v.style.description
                }else{
                    var desc = 'No comment';
                }
                
                list = '<div class="card mb-3"><img class="card-img-top"><div class="card-body"><a href="#" id=' + v.id + '><h5 class="card-title">'+v.name+'</h5></a><p class="card-text">'+desc+'</p></div></div>';
                 console.log(list);
                 $('form').trigger("reset");
                 $('.cardMain').removeClass('hidden');
                 $('.cardMain').append(list);
                
                
            });

        }
    });
});

$(document).on('click', 'a', function (e) {
    e.preventDefault();
    var id = ($(this).attr('id'));
     
    $.ajax({
        url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id,
        success: function (result) {
            console.log(result);
        var name = result.name;
        var desc = result.style.description;
        $('.modal-title').text(name);
        $('.modal-body').text(desc);
        $('#modal').modal('show');

        
        }
    })
    
    
   

})