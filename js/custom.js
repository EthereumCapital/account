$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $("header").addClass("sticky-header");
        } else {
            $("header").removeClass("sticky-header");
        }
    });
    
    $navbarHeight = $(".navbar").outerHeight();
    $(".woodmart-search-full-screen").css("top", $navbarHeight);
    
    $(".navbar-search").on("click", function (){
        $(".woodmart-search-full-screen").toggleClass("search-overlap");        
    });
    
    $(".wd-cross-button").on("click", function (){
        $(".woodmart-search-full-screen").removeClass("search-overlap");
    });
    
    $(".mobile-nav-icon > a").on("click", function (){
        $(".mobile-nav").addClass("act-mobile-menu");
        $(".woodmart-close-side").addClass("woodmart-close-side-opened");
    });
    
    $(".woodmart-close-side").on("click", function (){
        $(".mobile-nav").removeClass("act-mobile-menu");
        $(this).removeClass("woodmart-close-side-opened");
    });
});