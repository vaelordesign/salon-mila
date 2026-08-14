(function () {
  'use strict';

  var btn = document.getElementById('btnMenu');
  var nav = document.getElementById('navMobile');

  if (!btn || !nav) { return; }

  function fermer() {
    nav.classList.remove('ouvert');
    btn.setAttribute('aria-expanded', 'false');
  }

  function basculer() {
    var ouvert = nav.classList.toggle('ouvert');
    btn.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  }

  btn.addEventListener('click', basculer);

  var liens = nav.querySelectorAll('a');
  for (var i = 0; i < liens.length; i++) {
    liens[i].addEventListener('click', fermer);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { fermer(); }
  });

})();
