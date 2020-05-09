//Scroll NavBar

var navBar = $('.navbar'),
    data = navBar.data();

 
var scrolling = false,
    scrolledPast = false;

 
function switchInto() {
    'use strict';
    scrolledPast = true;
   
   
    navBar.addClass(data.intocolor);
    navBar.addClass(data.intosize);
    console.log('into transition triggered!');
}


function switchStart() {
    'use strict';
    scrolledPast = false;
  
    
    navBar.removeClass(data.intocolor);
    navBar.removeClass(data.intosize);
    console.log('start transition triggered!');
}


$(window).scroll(function () {'use strict'; return scrolling = true; });

setInterval(function () {
    'use strict';
  
    if (scrolling) {
   
        scrolling = false;
    
        if ($(window).scrollTop() > 200) {
      
            if (!scrolledPast) {
                switchInto();
            }
        } else {
 
            if (scrolledPast) {
                switchStart();
            }
        }
    }
 
}, 100);














//Our Auto Testimonial Slider
    (function autoslider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(2000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoslider();
                });
            } else {
                
                $(this).delay(2000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoslider();
                });
            }
        });
        
    }());