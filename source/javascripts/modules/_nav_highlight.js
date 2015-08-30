// // ======================================
// // Helper functions
// // ======================================
// // Get section or article by href
// function getRelatedContent(el){
//   return $($(el).attr('href'));
// }
// // Get link by section or article id
// function getRelatedNavigation(el){
//   return $('nav a[href=#'+$(el).attr('id')+']');
// }


// // ======================================
// // Smooth scroll to content
// // ======================================
// $('nav a').on('click',function(e){
//   e.preventDefault();
//   $('html,body').animate({scrollTop:getRelatedContent(this).offset().top - 20})
// });


// // ======================================
// // Waypoints
// // ======================================
// // Default cwaypoint settings
// // - just showing
// var wpDefaults={
//   context: window,
//   continuous: true,
//   enabled: true,
//   horizontal: false,
//   offset: 0,
//   triggerOnce: false
// };

// $('section,article')
//    .waypoint(function(direction) {
//      // Highlight element when related content
//      // is 10% percent from the bottom... 
//      // remove if below
//      getRelatedNavigation(this).toggleClass('active', direction === 'down');
//    }, {
//      offset: '90%' // 
//    })
//    .waypoint(function(direction) {
//      // Highlight element when bottom of related content
//      // is 100px from the top - remove if less
//      // TODO - make function for this
//      getRelatedNavigation(this).toggleClass('active', direction === 'up');
//    }, {
//      offset: function() {  return -$(this).height() + 100; }
//    });



// // ======================================
// // Random content and navigation headers
// // ======================================
// $('section').each(function(){
//   var cap=getRelatedNavigation(this).text();
//   $(this).prepend('<h2>'+cap+'</h2>')
// })
// $('article').each(function(){
//   var cap=getRelatedNavigation(this).text();
//   var w=Math.ceil(Math.random()*200)+400;
//   var h=w-200;
//   var c=$(this).closest('section').attr('id');
//   $(this).html('<h3>'+cap+'</h3><img src="http://lorempixel.com/g/'+w+'/'+h+'/'+c+'">'+lipsum(5));
// })

// function lipsum(p){
//   var words='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';
//       words+='tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam';
//       words+='quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo';
//       words+='consequat duis aute irure dolor in reprehenderit in voluptate velit esse';
//       words+='cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non';
//       words+='proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
//       words=words.split(' ');
//   lorem=''; for(var i=0;i<p;++i){ 
//     var w=Math.ceil( Math.random() * words.length -10 ) + 10;
//     lorem+='<p>'+words.slice(0,w).join(' ')+'.</p>'; 
//   }
//   return lorem;
// }


// /*
// Thoughts and good stuff

// Make event dispatchers more like:
// $('#elm').on('waypoint',function(e){ 
//   alert(e.direction);
// })

// Offset functions
// - full 
// - on screen
// - off screen
// - off screen top
// - off screen bottom
// - off screen left
// - off screen right
// - in range [top, bottom]
// - in from top
// - in from bottom



 
//  //cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js
//  //cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js


//  //cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.2/jquery.ui.touch-punch.min.js
//  //cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js
//  //cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js
//  //cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.0/jquery.cookie.js 
 
// */

