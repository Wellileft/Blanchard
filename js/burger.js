(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const menuLinks = menu.querySelectorAll(`.${params.menuItems}`);

    btn.setAttribute('aria-expanded', false);

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    menuLinks.forEach(function (el) {
      el.addEventListener('click', function () {

        btn.classList.remove('is-active');

        menu.classList.remove('is-active');

        document.body.removeAttribute('style');
      })
    })

    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }
    });
  }

  setBurger({
    btnClass: "js-burger",
    menuClass: "js-menu-wrap",
    menuItems: "header__list-item",
    activeClass: "is-active",
    hiddenClass: "is-closed"
  });
})();
