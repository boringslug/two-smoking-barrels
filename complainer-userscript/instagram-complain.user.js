// ==UserScript==
// @name complainer
// @author boringslug
// @description скарга на користувача
// @version 1.0
// @match https://www.instagram.com/*
// ==/UserScript==

(function (window, undefined) {
  let w, _unsafeWindow;
  try { _unsafeWindow = unsafeWindow } catch { _unsafeWindow = null }
  if (_unsafeWindow && typeof _unsafeWindow != undefined) {
    w = _unsafeWindow
  } else { w = window; }
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
      doc => doc.querySelector('svg[aria-label="Параметри"]').parentElement.parentElement,
      doc => Array.from(doc.querySelectorAll('button')).find(el => el.textContent.includes('Поскаржитися')),
      doc => Array.from(doc.querySelectorAll('button')).find(el => el.innerHTML.includes('Поскаржитися на обліковий запис')),
      doc => Array.from(doc.querySelectorAll('button')).find(el => el.innerHTML.includes('Він публікує контент')),
      doc => Array.from(doc.querySelectorAll('button')).find(el => el.innerHTML.includes('Мова ворожнечі')),
      doc => Array.from(doc.querySelectorAll('button')).find(el => el.textContent.includes('Надіслати скаргу'))
    ]

    function complainToTheUser(i = 0) {
      if (i >= elements.length) return;

      const element = elements[i](document);

      if (element) {
        element.click();
        setTimeout(() => complainToTheUser(i + 1), INTERVAL);
      } else {
        setTimeout(() => complainToTheUser(i), INTERVAL);
      }
    }
  }

  // code end //

})(window);
