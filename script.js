$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    //script de la palanca del menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); 
        $('.menu-btn i').toggleClass("active");
    });
});