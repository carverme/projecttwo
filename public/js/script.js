$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();


     $('#modal3').on('submit', function(e) {
       console.log('working!!')
       e.preventDefault();
       var updatedInfo = $(this).serialize();
       var tourId = $(this).attr('action');
       var url = '/tours/' + tourId
       console.log('submittttttt')
       $.ajax({
         method: "PUT",
         url: url,
         data: updatedInfo
       }).done(function(data) {
         console.log(data);
         window.location = url;
       });
     });

    $('a.delete').on('click', function(e) {
      e.preventDefault();
      var url = $(this).attr('href');
      var values = url.split('/');
      console.log(values.length);
      console.log(values);
      $.ajax({
        method: "DELETE",
        url: url
      }).done(function(data) {
        window.location = '/tours/' + values[2];
      });
    });
  });
