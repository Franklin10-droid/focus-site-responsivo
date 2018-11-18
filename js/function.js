//inciar o jQuery
$(document).ready(function(){
    
    $("div#dropdownInMenu").hide(0);
    $("a.btnMenu").click(function(){
        $("div#dropdownInMenu").slideToggle(700);
    })
    //Ao clicar em qualquer parte da pág esconde o menu
    $("div.pagInteira").click(function(){
        $("div#dropdownInMenu").slideUp(500);
    })
    //Scroll on click. NavBar
    $("a#navBox1").click(function(){ 
        $("html,body").animate({                         
            scrollTop: $("#logoBack").offset().top},"slow");  
    });
    $("a#navBox2").click(function(){
        $("html,body").animate({                         
            scrollTop: $(".about").offset().top},"slow");  
    });
    $("a#navBox3").click(function(){ 
        $("html,body").animate({                         
            scrollTop: $(".album").offset().top},"slow"); 
    });
    $("a#navBox4").click(function(){
        $("html,body").animate({                         
            scrollTop: $(".socialMidia").offset().top},"slow"); 
    });
})
