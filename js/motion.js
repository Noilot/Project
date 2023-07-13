var ag = setInterval("autoGallery()",3000);
var slideNum = 1;


function autoGallery(){

    slideNum += 1;  // 1 2 (3) 4...5...
    if(slideNum > 3  ){ slideNum = 1; }
 
    $(".visual_controls2 span").text("0"+slideNum );
    $(".visual_slide").stop().animate({ marginLeft:"-100%"},function(){
        $(".visual_slide li:first").appendTo(".visual_slide");
        $(".visual_slide").css({ marginLeft:0});
    });
}


$(function(){

    $(".gnb>li>ul").hide();
    

    $(".gnb>li:first a").on("mouseover",function(){
        $(".gnb>li>ul").stop().slideDown("fast");
    });

    $(".gnb").on("mouseleave",function(){
        $(".gnb>li>ul").stop().slideUp("fast");
    });


    /*
    $(".gnb>li:first a").mouseover(function(){
        $(".gnb>li>ul").stop().slideDown("fast");
    });

    $(".gnb").mouseleave(function(){
        $(".gnb>li>ul").stop().slideUp("fast");
    });
    */

    //1.visual 
    $(".visual_controls1 button:eq(0)").click(function(){
        clearInterval(ag);
        slideNum -= 1;

        if(slideNum < 1  ){ slideNum = 3; }

        $(".visual_controls2 span").text("0"+slideNum );
        $(".visual_slide li:last").prependTo(".visual_slide");
        $(".visual_slide").css({ marginLeft:"-100%"});
        $(".visual_slide").stop().animate({ marginLeft:"0"});
    });
    $(".visual_controls1 button:eq(1), .visual_controls2 button:eq(1)").click(function(){
        clearInterval(ag);
        autoGallery();
    });
    $(".visual_controls2 button:eq(0)").click(function(){
        clearInterval(ag);
    });

    $(".nav_view_btn").click(function(){
        $("nav").stop().animate({ marginRight: 0 });
    });
    $(".nav_close_btn").click(function(){
        $("nav").stop().animate({ marginRight: "-100%" });
    });
    






});