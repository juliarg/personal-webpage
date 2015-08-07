
//main name fade in
//hide full name
$(".one").hide();
$(".two").hide();
$(".three").hide();
$(".four").hide();
$(".five").hide();
$(".six").hide();
$(".seven").hide();
$(".eight").hide();
$(".nine").hide();
$(".ten").hide();
//fade in each letter separately
$(".one").fadeIn(1000);
$(".eight").fadeIn(1600);
$(".three").fadeIn(2200);
$(".six").fadeIn(2800);
$(".five").fadeIn(3400);
$(".nine").fadeIn(4000);
$(".two").fadeIn(4600);
$(".seven").fadeIn(5200);
$(".four").fadeIn(5800);



//down arrow fade in 
$(".scrollarrow").hide();
$(".scrollarrow").fadeIn(4000);

//change text on downarrow 
$(".scrolldown").on("mouseover", function(){
  $(this).html('SCROLL DOWN');
});
                     
$(".scrolldown").on("mouseleave", function(){
  $(this).html('&#9660;');
});    


//change background color of social media icon boxes from gray to blue when mouse 
//hovers over 
$(".iconbox").on("mouseover", function(){
	$(this).css("background-color", "gray")
});
//change background color back to black 
$(".iconbox").on("mouseleave", function(){
	$(this).css("background-color", "black")
});


//change text color of links in about section, from black to blue
$(".link").on("mouseover", function(){
	$(this).css("color", "#B9CDDE")
});
//change text color of links in about section, from white to blue
$(".link").on("mouseleave", function(){
	$(this).css("color", "black")
});



//fullpage.js initialization
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors:['welcome', 'about', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['WELCOME', 'ABOUT', 'CONTACT'],
        showActiveTooltip: true,
        slidesNavigation: false,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#fff', '#fff', '#F4F6F6'],
        paddingTop: '3em',
        paddingBottom: '100px',
        fixedElements: '.header',
        responsiveWidth: 838,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});
