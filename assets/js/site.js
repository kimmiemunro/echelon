document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

//   const radioInput = Array.prototype.slice.call(document.querySelectorAll('input[type="radio"]'), 0);
//     if (radioInput.length > 0) { 
//       radioInput.forEach( el => { 
//         el.addEventListener('click', () => { 
//           const target = document.querySelector(el.dataset.target);
//           target.setAttribute("href", el.value);
//           setCookie("theme", el.value, 90);
//       });
//     });
//   }
//   (function () {
//     let value = getCookie("theme");
//     if (value !== "") {
//       document.querySelector('link[rel="stylesheet"]').setAttribute("href", value);
//       const radioInput = document.querySelector(`input[type="radio"][value="${value}"]`);
//       radioInput.checked = true;
//     }
//   })();
});
