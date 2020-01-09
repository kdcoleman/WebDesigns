/* Javascript Code for Highlighting Side Navigation Bar
Author: Kayla D. Coleman
Author URI: github.com/kdcoleman
*/

/* Replace <script></script> contents in KayInLA.html with
<script src="kayinla.js"></script>
to use this file instead of the jQuery implementation
*/

/* Highlights the current page on the side nav bar while scrolling */
window.addEventListener('scroll', function() {
  var position = this.scrollY;

  var elems = document.querySelectorAll('.section, .image');
  elems.forEach(function(elemItem) {
    var target = elemItem.offsetTop;
    var id  = elemItem.id;

    if (position >= target - 300) {
      Array.prototype.slice.call(document.querySelectorAll('a.active')).forEach(function(element) {
        element.classList.remove('active');});
      Array.prototype.slice.call(document.querySelectorAll('a.circle')).forEach(function(element) {
          element.classList.remove('circle_active');
        });
      Array.prototype.slice.call(document.querySelectorAll('a[href=\\#'+id+']')).forEach(function(element) {
        element.classList.add('active');
      });
      Array.prototype.slice.call(document.querySelectorAll('a.circle[href=\\#'+id+']')).forEach(function(element) {
        element.classList.add('circle_active');
      });
    }
  })
});
