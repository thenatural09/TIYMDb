function showHomePage (){
   var bigSt = '<div id="app-container">'
   bigSt +=       '<div class ="container-fluid">'
   bigSt +=          '<div class="jumbotron homepage">'
   bigSt +=           '<h1>Reel-Time Charleston </h1>'
   bigSt +=          '<p>Users provided movie and tv locations. Locally.</p>'
   bigSt +=           '<br>'
   bigSt +=           '<div class="btn-group" role="group" aria-label="...">'
   bigSt +=              '<p><a href="#add" class="btn btn-warning homepage-btn " role="button">Add a New Sighting</a> <a href="#view" class="btn btn-warning homepage-btn view" role="button">View Sightings</a></p>'
   bigSt +=           '</div>'
   bigSt +=        '</div>'
   bigSt +=    '</div>'

    document.querySelector('#app-container').innerHTML = bigSt

}
