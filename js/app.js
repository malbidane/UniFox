
//? Loading page Spinner
/*$(window).on('load', function(){
    
    $(".loading-page .sk-cube-grid").fadeOut(2000,function(){

    //$("body").css("overflow","auto");
    
    $(this).parent().fadeOut(2000,function(){
       
        $(this).remove();

    });
  }); 
});*/

$(document).ready(function () {
    
    //! Burger Menu
    $(".burger-Menu").click(function(){

       $(".ul-list").slideToggle("1000");

    });

    //! progress bar
    $('#circle , #circle3').circleProgress({size: 180});
    $('#circle2 , #circle4').circleProgress({size: 180});

    //! Scroll To Section and Active Class
    $(".nav-list a").click(function(){
        
        
        $(this).parent().addClass("active").siblings().removeClass("active");
        
        //$(".nav-list a").parent().removeClass("active");
        //$(this).parent().addClass("active");
        
        var SectionId = $(this).data("scroll");

            $("html,body").animate({

                scrollTop: $( "#" + SectionId).offset().top - 70
                
            },1000);

            //! Hide list on click for Mobile Screen

            if($(window).innerWidth() <= 575){
                
                $(".nav-list").parent().slideUp();
          
              }
    });

    var windowScroll = $(this).scrollTop();

        if ( windowScroll > 100){
            
            $(".header").addClass("sticky");
            
        }else{

            $(".header").removeClass("sticky");
            
        }

    

    $(".button button").click(function(){

        $(this).addClass("active-btn").siblings().removeClass("active-btn");

        var filter = $(this).attr("id");

        if(filter === "All"){

            $(".img > div").fadeIn("1000");

        }else{

            $(".img > div").fadeOut("2000");

            $(".img").contents().filter("." + filter).fadeIn("1500");
        }
        
    });

    //!owl curosal -- Team Section

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    
    //! choose-us C-panel

    $(".choose-us ul li").click(function(){
        
        $(this).addClass("active").siblings().removeClass("active");

        var role = $(this).data("role");

        $(".panel-content > div").hide(); 

        $(".panel-content").contents().filter("#" + role).fadeIn();
        
    });

    //! choose-us - magnificPopup

    $('.popup-link').magnificPopup({type:'iframe'});


    //! slick slider Pleaseure Section

    $('.slider').slick({
        arrows:false,
    });

    //! Scroll To Top Function
    
    $(".Scroll-To-Top").click(function(){

        $("html , body").animate({
            scrollTop:0
        },600);
   });

    //! counter start  Statistics-Section

     var eventFired = false,
     eventFired2 = false,
     StatisticsPositionTop = $('#Statistics').offset().top,
     ourExprtesPositionTop = $('#our-Exprtes').offset().top;

$(window).on("scroll",function(){
   
        var currentPosition = $(document).scrollTop()+150;

       if (currentPosition >= StatisticsPositionTop && eventFired === false) {

        eventFired = true;
        
        $('.timer').countTo();
}
    //! counter start  our-Exprtes-Section

        var CurrentPosition = $(document).scrollTop()+100;

        if (CurrentPosition >= ourExprtesPositionTop && eventFired2 === false) {

            eventFired2 = true;

            $('#circle , #circle3').circleProgress({
                value: 0.75,
                size: 180,
                fill: {
                    gradient: ["#ff2542", "#f0d357", "#ff2542"] 
                }
              });

              $('#circle2 , #circle4').circleProgress({
                value: 0.85,
                size: 180,
                fill: {
                    gradient: ["#7cb62f", "#06c0c2", "#7cb62f"] 
                }            
             });             
    }


    //! Sync List Link with Sections
    
    $(".Block").each(function(){

        if ($(window).scrollTop() > $(this).offset().top - 80 ){

            var BlockID = $(this).attr("id");

            $(".nav-list").removeClass("active");           
            $('.nav-list a[data-scroll="' + BlockID + '"]').parent().addClass("active");

        }

    });


    var windowScroll = $(this).scrollTop();

    if ( windowScroll > 100){
        
        $(".header").addClass("sticky");
        
    }else{

        $(".header").removeClass("sticky");
        
    }

        //! Scroll To Top Hide Show

    $(window).scrollTop() > 500 ? $(".Scroll-To-Top").fadeIn() : $(".Scroll-To-Top").fadeOut();

    
        
              
    //! Nice Scroll

    // nice Scroll
   $("body").niceScroll({
    cursorcolor:"#7cb62f",
    cursorwidth:"8px"
   });

});

});
