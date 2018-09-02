$(document).ready(function() {
  $('.container').css('visibility', 'visible');
  $('.loader').css('display', 'none');
  particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
});
