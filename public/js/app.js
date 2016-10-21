//app.js
console.log('wired up!')
//j-query
console.log($)
//underscore
console.log(_)
//backbone
console.log(Backbone)


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

               console.log(formEl.title.value)
               console.log(formEl.director.value)

               var objForDatabase = {
                  title: formEl.title.value,
                  director:  formEl.director.value,
                  description: formEL.description.value,
                  location: formEl.location.value,
                  loactionImg: formEl.locationImg.value
               }

               $.post(JSON.stringify('https://quik-spitter-api.herokuapp.com/api/add-siting')).then(function(serverRes){
                  window.location.hash = "view"
            })

         })

      }
   }


         // break;
         // case "add":
         // $.post(' https://quik-spitter-api.herokuapp.com/api/add-siting').then(function(userInput){
         //
         // })
         //    submitPage()
         //    break;
         // }


controllerRouter()
window.addEventListener('hashchange' , controllerRouter)



//showViewSightingPage()
