alert("check");

// // Helper function to add an event listener
// function addEvent (el, event, callback) {
//   if ('addEventListener' in el) {                  // If addEventListener works
//     el.addEventListener(event, callback, false);   // Use it
//   } else {                                         // Otherwise
//     el['e' + event + callback] = callback;         // CreateIE fallback
//     el[event + callback] = function () {
//       el['e' + event + callback](window.event);
//     };
//     el.attachEvent('on' + event, el[event + callback]);
//   }
// }
// // Helper function to remove an event listener
// function removeEvent(el, event, callback) {
//   if ('removeEventListener' in el) {                      // If removeEventListener works
//     el.removeEventListener(event, callback, false);       // Use it
//   } else {                                                // Otherwise
//     el.detachEvent('on' + event, el[event + callback]);   // Create IE fallback
//     el[event + callback] = null;
//     el['e' + event + callback] = null;
//   }
// }
//
//
// //NUMBER 1 Very basic welcome alert when you log in.
// (function(){
// // Get form element
// var form = document.getElementById('login');
// // When user submits form
// addEvent(form, 'submit', function(e) {
// e.preventDefault();                              // Stop it being sent
// var elements = this.elements;                    // Get all form elements
// var username = elements.username.value;          // Select username entered
// var msg      = 'Welcome ' + username;            // Create welcome message
// document.getElementById('main').innerHTML = msg; // Write welcome message
// });
// }());
