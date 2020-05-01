jQuery(document).ready(function ($) {
    jQuery(document).ready(function ($) {
    
        $(window).on('load', function () {
            $(".loaded").fadeOut();
            $(".preloader").delay(1000).fadeOut("slow");
        });
        
    });
});

var images = [];
images[0] = "assets/images/foto1.jpg";
images[1] = "assets/images/foto10.jpg";
images[2] = "assets/images/foto11.jpg";
var i = 0;
setInterval(fadeDivs, 6000);
  
function fadeDivs() {
    i = i < images.length - 1 ? i : 0;
  
    $('#home').fadeOut(300, function () {
        $('#home').css('background-image', 'url(' + images[i] + ')').fadeIn(100);
        $('#home').css('background-size', 'cover');
    });
    i++;
    
}
