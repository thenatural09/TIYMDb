function showViewSightingPage (dataArrSitings){

  //  var putDataOnPage = function(serverRes){
      console.log(dataArrSitings)

      var bigStrView = " "
      dataArrSitings.forEach(function(sitingObjRecord){

        bigStrView +=        '<div class="row">'
        bigStrView +=          ' <div class="col-sm-6 col-md-4">'
        bigStrView +=            '<div class="thumbnail">'
        bigStrView +=               '<img src="'+ sitingObjRecord.locationImg +'" alt="...">'
        bigStrView +=               '<div class="caption">'
        bigStrView +=                ' <h3>'+ sitingObjRecord.title +'</h3>'
        bigStrView +=                 '<p>'+ sitingObjRecord.director +'</p>'
        bigStrView +=                 '<p>'+ sitingObjRecord.location +'</p>'
        bigStrView +=                 '<h4>'+ sitingObjRecord.description +'</h4>'
        bigStrView +=               '</div>'
        bigStrView +=            '</div>'
        bigStrView +=          ' </div>'
        bigStrView +=        '</div>'

      })
         document.querySelector('#app-container').innerHTML = bigStrView


// $.getJSON('https://quik-spitter-api.herokuapp.com/api/sitings').then(putDataOnPage)
}
