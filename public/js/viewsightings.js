function showViewSightingPage (){

   var putDataOnPage = function(returnedData){
      console.log(returnedData);
   }

      var bigStrView = " "
         bigStrView +=        '<div class="row">'
         bigStrView +=          ' <div class="col-sm-6 col-md-4">'
         bigStrView +=            '<div class="thumbnail">'
         // bigStrView +=               '<img src="'+ returnedData.locationImg +'" alt="...">'
         bigStrView +=               '<div class="caption">'
         // bigStrView +=                ' <h3>'+ returnedData.title +'</h3>'
         // bigStrView +=                 '<p>'+ returnedData.director +'</p>'
         // bigStrView +=                 '<p>'+ returnedData.location +'</p>'
         // bigStrView +=                 '<h4>'+ returnedData.description +'</h4>'
         bigStrView +=                 '<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="" class="btn btn-default" role="button">Button</a></p>'
         bigStrView +=               '</div>'
         bigStrView +=            '</div>'
         bigStrView +=          ' </div>'
         bigStrView +=        '</div>'


         document.querySelector('#app-container').innerHTML = bigStrView


$.getJSON('https://quik-spitter-api.herokuapp.com/api/sitings').then(putDataOnPage)
}
