// //app.js
// console.log('wired up!')
// //j-query
// console.log($)
// //underscore
// console.log(_)
// //backbone
// console.log(Backbone)


var controllerRouter = function(){
   var currentHash = window.location.hash.slice(1)
   // console.log(currentHash);
   // console.log(window.location.hash);

   if(currentHash.length === 0) { return showHomePage() }

   var currentHashComponents = currentHash.split('/')


   var currentHashPrefix = currentHashComponents[0]
   var currentHashSuffix = currentHashComponents[1]

   switch(currentHashPrefix){
      case "view":
         $.getJSON('https://quik-spitter-api.herokuapp.com/api/sitings').then(function(serverRes){
          showViewSightingPage(serverRes)
        })

         break;
      }
      switch(currentHashPrefix){

         case "add":
         submitPage()

         document.querySelector('#new-sighting-form')
            .addEventListener('submit', function(evt){
              evt.preventDefault()
                var formEl = evt.target


               var objForDatabase = {
                  title: formEl.title.value,
                  director:  formEl.director.value,
                  description: formEl.description.value,
                  location: formEl.location.value,
                  locationImg: formEl.locationImg.value
               }
               console.log(objForDatabase);

               $.post('https://quik-spitter-api.herokuapp.com/api/add-sitings', JSON.stringify(objForDatabase)).then(function(updateSighting){
                  window.location.hash = "view"

              })

            })

         }

      }


window.addEventListener('hashchange' , controllerRouter)
controllerRouter()
    //  $.post(' https://quik-spitter-api.herokuapp.com/api/add-siting').then(function(userInput){


// showViewSightingPage()
