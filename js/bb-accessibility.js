/*
** A compiliation of helpful accessibility JS widgets
** Author: Giovani Camara
** Version: 1.0.0
**
** Please maintain nicely.
** Let Gio know if you find anything that could use updating or if you find anything questionable.
**
**
**
*/

$(document).ready(function(){
	// runs the add_target_blank_to_external_links function — Per WCAG G201
	add_target_blank_to_external_links();

  // adds class when user is tabbing
  window.addEventListener('keydown', handleFirstTab); 	

}); // end of document ready function

/***
**********
Helper Functions:
**********
***/

// Converts all external links to target="_blank" — WCAG G201
// Source: https://www.w3.org/TR/WCAG20-TECHS/G201.html
// Notes: Sometimes this can cause issues for sub-domain carts or other links. If so adjust function below.
// for example adding this line into the function will ignore the hardcoded link we put in. 
// $('a[href*="store.domain.com"]').attr({target: "_self", rel: "noopener"});
function add_target_blank_to_external_links() {
	$('a[href^="http"]').not('a[href*="' + location.hostname + '"]').attr({target: "_blank", rel: "noopener"}).append("<span class='sr-only'> (Opens in new window) </span>");
}

// Adds user-is-tabbing class to body. This allows us to target focus outlines for keyboard nav users.
// Source: https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

// Removes the user-is-tabing to body when a user clicks using the mouse. 
// This way our custom focus outlines/color don't become visible to sighted users.
// Source: https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');
  
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}