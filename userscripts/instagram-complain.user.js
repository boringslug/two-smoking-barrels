// ==UserScript==
// @name boringslug
// @author boringslug
// @description скарга на користувача (мова ворожнечі)
// @version 1.0
// @match https://www.instagram.com/*
// ==/UserScript==

(function (window, undefined) {
  let w; if (typeof unsafeWindow != undefined) { w = unsafeWindow } else { w = window; }
  if (w.self != w.top) return;

  // code start //

  if (/https:\/\/www.instagram.com/.test(w.location.href)) {
    const INTERVAL = 200 // 0.2s

    const buttonComplain = document.createElement('button');
    buttonComplain.style.cssText = 'position: fixed; left: 1rem; top: 1rem;';
    buttonComplain.innerText = 'Скарга на орка'
    document.body.appendChild(buttonComplain);
    buttonComplain.addEventListener('click', () => complainToTheUser());

    const elements = [
      () => document.querySelector('svg[aria-label="Параметри"]').parentElement.parentElement,
      () => Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Поскаржитися'),
      () => Array.from(document.querySelectorAll('button')).find(el => el.innerHTML.includes('Поскаржитися на обліковий запис')),
      () => Array.from(document.querySelectorAll('button')).find(el => el.innerHTML.includes('Він публікує контент')),
      () => Array.from(document.querySelectorAll('button')).find(el => el.innerHTML.includes('Мова ворожнечі')),
      () => Array.from(document.querySelectorAll('button')).find(el => el.textContent == 'Надіслати скаргу')
    ]

    function complainToTheUser(i = 0) {
      if (i >= element.length - 1) return;

      const element = elements[i];

      if (element) {
        element.click();
        complainToTheUser(i + 1);
      } else {
        setTimeout(() => complainToTheUser(i), INTERVAL);
      }
    }
  }

  // code end //

})(window);
