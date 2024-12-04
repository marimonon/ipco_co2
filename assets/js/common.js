(function () {
  'use strict';

  var toggleDrawer = function toggleDrawer() {
    document.body.classList.toggle('is-drawer-active');
  };
  document.getElementById('drawer_btn').addEventListener('click', toggleDrawer);
  document.getElementById('drawer_shade').addEventListener('click', toggleDrawer);

  var start = function start() {
    document.querySelector("[data-info]").classList.toggle("-active");
    document.querySelector("[data-quest]").classList.toggle("-active");
  };
  document.querySelector("[data-start]").addEventListener("click", start);

})();
