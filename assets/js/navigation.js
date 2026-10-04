// The original bundle handles menu animation and parallax backgrounds.
// Keep the menu's accessible state in sync and close it after navigation.
(() => {
  const button = document.querySelector('.menu-responsive-button');
  const menu = document.querySelector('#main-menu');

  const syncState = () => {
    button.setAttribute('aria-expanded', String(menu.classList.contains('js-menu-opened')));
  };
  const closeMenu = () => {
    menu.classList.remove('js-menu-opened');
    button.classList.remove('js-menu-responsive-button-active');
    syncState();
  };

  new MutationObserver(syncState).observe(menu, { attributes: true, attributeFilter: ['class'] });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('js-menu-opened')) {
      closeMenu();
      button.focus();
    }
  });
})();
