jQuery("#carousel").owlCarousel({
  margin: 10,
  loop: true,
  items: 1,
  nav:true,
  responsive: {
    0: {
      stagePadding: 10,
      items: 1
    },

    600: {
      stagePadding: 50,
      items: 1
    },

    1024: {
      stagePadding: 150,
      items: 1
    },

    1366: {
      stagePadding: 150,
      items: 1
    }
  }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".testimonial-section");
const navlinks = document.querySelectorAll(".testimonial-section");
var x,y;
$(".testimonial-section").mousemove(function(event) {
  var offset = $(this).offset();
  x = event.pageX - offset.left;
  y = event.pageY - offset.top;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.display = "block!important";
});
$(".testimonial-section .cursor").hide();
$(window).mousemove(function(event) {
  let iy = event.pageY - $(".testimonial-section").offset().top;
  console.log($(".testimonial-section").height() + 180);
  // console.log($(".testimonial-section").offset().top);
  // console.log(iy);
  if (iy > 0 && iy < $(".testimonial-section").height() + 180 ) {
    $(".testimonial-section .cursor").show(); 
  }else{
    $(".testimonial-section .cursor").hide();
  }
});
