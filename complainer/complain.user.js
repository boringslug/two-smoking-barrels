// ==UserScript==
// @name complainer
// @author boringslug
// @description скарга на користувача
// @version 1.0
// @match https://www.instagram.com/*
// @match https://www.youtube.com/*
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
    ];

    function complainToTheUser(i = 0) {
      if (i >= elements.length) return;

      try {
        const element = elements[i](document);
  
        if (element) {
          element.click();
          setTimeout(() => complainToTheUser(i + 1), INTERVAL);
        } else {
          setTimeout(() => complainToTheUser(i), INTERVAL);
        }
      } catch {
        return console.log('Потрібно бути на сторінці користувача')
      }
    }
  }

  if (/https:\/\/www.youtube.com/.test(w.location.href)) {
    const INTERVAL = 200 // 0.2s

    const buttonComplain = document.createElement('button');
    buttonComplain.style.cssText = 'position: fixed; left: 20rem; top: 1rem; z-index: 999999;';
    buttonComplain.innerText = 'Скарга на орка'
    document.body.appendChild(buttonComplain);
    buttonComplain.addEventListener('click', () => complainToTheUser());

    const elements = [
      doc => Array.from(doc.querySelectorAll('tp-yt-paper-tab div')).find(e => e.innerText.includes('КАНАЛЕ')),
      doc => doc.querySelector('button[aria-label="Пожаловаться на пользователя"]'),
      doc => Array.from(doc.querySelectorAll('ytd-menu-service-item-renderer yt-formatted-string'))
        .find(e => e.innerText.includes('на пользователя')),
      doc => doc.querySelector('tp-yt-paper-radio-button[aria-label="Дискриминационные высказывания в отношении защищенной группы людей. Контент, в котором пропагандируется ненависть или насилие в отношении определенных лиц (на основании расовой или этнической принадлежности, религии, инвалидности, пола, возраста, статуса ветерана, сексуальной ориентации и полового самоопределения)."]'),
      doc => doc.querySelector('tp-yt-paper-button[aria-label="Далее"]'),
      doc => doc.querySelectorAll('ytd-selectable-video-renderer tp-yt-paper-checkbox')[0],
      doc => doc.querySelectorAll('ytd-selectable-video-renderer tp-yt-paper-checkbox')[1],
      doc => doc.querySelectorAll('ytd-selectable-video-renderer tp-yt-paper-checkbox')[2],
      doc => doc.querySelectorAll('ytd-selectable-video-renderer tp-yt-paper-checkbox')[3],
      doc => doc.querySelectorAll('ytd-selectable-video-renderer tp-yt-paper-checkbox')[4],
      doc => doc.querySelector('tp-yt-paper-button[aria-label="Далее"]'),
      doc => doc.querySelector('textarea').value = 'Ці відео допомагають вбивати наших близьких і закликає до геноциду Українського народу',
      doc => doc.querySelector('tp-yt-paper-button[aria-label="Отправить"]'),
    ];

    function complainToTheUser(i = 0) {
      if (i >= elements.length) return;

      try {
        const element = elements[i](document);
  
        if (element) {
          if (element.click) element.click();
          setTimeout(() => complainToTheUser(i + 1), INTERVAL);
        } else {
          setTimeout(() => complainToTheUser(i), INTERVAL);
        }
      } catch {
        return console.log('Потрібно бути на сторінці користувача')
      }
    }
  }

  // code end //

})(window);
