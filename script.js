



(function($) { "use strict";
		

//Navigation

var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();


    
})(jQuery); 




AOS.init({
  duration: 1200,
})








$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});









































