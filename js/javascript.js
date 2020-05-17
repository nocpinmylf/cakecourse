$(document).ready(() => {

  // Single page nav
  $('.main-nav').singlePageNav({
    'currentClass': "active",
    offset: 20
  });

  // Magnific pop up
  $('.gallery-1').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
    // other options
  });

  $('.gallery-2').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
    // other options
  });

  $('.gallery-3').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
    // other options
  });

  $('.current-year').text(new Date().getFullYear());
});