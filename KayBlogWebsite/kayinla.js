/* Javascript Code for Highlighting Side Navigation Bar
Author: Kayla D. Coleman
Author URI: github.com/kdcoleman
*/

var mkShirtImg = document.getElementById('mkShirtImg');

// Show second image on mouse over
mkShirtImg.addEventListener('mouseover', function(){
  this.src = "KayInLAImages/MKshirt2.png";
});

mkShirtImg.addEventListener('mouseout', function(){
  this.src = "KayInLAImages/MKshirt1.png";
});

// Show alert when load more button clicked
loadMore.addEventListener('click', function(){
  alert('More Products Coming Soon!');
});

/* Delete JQuery code in KayInLA.html and uncomment this code
to use the pure JS implementation of the highlighting side
navigation bar.

// Highlights the current page on the side nav bar while scrolling
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

*/
