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
         showViewSightingPage()
         break;
      }
      switch(currentHashPrefix){
         case "add":
            submitPage()
            break;
         }

   }

controllerRouter()
window.addEventListener('hashchange' , controllerRouter)


//showViewSightingPage()
