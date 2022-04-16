$(document).click(function(e){
  if ( e.target.tagName.toLowerCase() === 'li' ) {
    console.log(e.target.textContent);
  }
});

var textNode = "hello cgu!";
$('#myList').append('<li>'+textNode+'</li>');