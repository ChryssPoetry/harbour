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
