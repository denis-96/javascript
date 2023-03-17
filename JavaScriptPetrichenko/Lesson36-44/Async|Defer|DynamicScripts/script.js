"use strict";

const p = document.querySelectorAll('p')
console.log(p)

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script)
}

loadScript('test.js')
loadScript('some.js')

// defer - загрузка скрипта в фоновом режиме (параллельно загрузке DOM)
// async - страница не ждёт асинхронных скриптов, событие DOMContentLoaded и async скрипты не ждут друг друга