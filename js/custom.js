$(function(){
   
$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
    dots:true,
});
    
    $('.team-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
        
        responsive: [
            {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
       
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
       
      }
    }
  ]
   
});
    
      
    $('.comments-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
        dots:true,
   
});
    
   
$('.venobox').venobox(); 
    
       
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
});
    
  $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.navbar').addClass('bg');
        }else{
            $('.navbar').removeClass('bg');
        }
        
        if(scrolling>200){
            $('.back-top').fadeIn(500);
        }else{
            $('.back-top').fadeOut(500);
        }
        
    });  
    
      var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 74
                }, 1500);
                return false;
            }
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});