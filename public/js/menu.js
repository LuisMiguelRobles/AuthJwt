// This code dosen't works on Firefox and IE and works on other browesers.
$(document).ready(function () {
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
      $(this).toggleClass('open');
    });
  });
  
  // Works everywhere
  $(document).ready(function () {
  
    // Hide/show animation hamburger function
    $('.navbar-toggler').on('click', function () {
  
      // Take this line to first hamburger animations
      $('.animated-icon1').toggleClass('open');
  
      // Take this line to second hamburger animation
      $('.animated-icon3').toggleClass('open');
  
      // Take this line to third hamburger animation
      $('.animated-icon4').toggleClass('open');
    });
  
  });