setTheme('theme-dark');
document.ondragstart = test;
//запрет на перетаскивание 
document.onselectstart = test;
//запрет на выделение элементов страницы
document.oncontextmenu = test;
//запрет на выведение контекстного меню
function test() {
return false
}

window.onload = function () {
  document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
  }, false);
  document.addEventListener("keydown", function (e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
          disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
          disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
          disabledEvent(e);
      }
      if (e.shiftKey && event.keyCode == 120) {
          disabledEvent(e);
      }
      if (e.shiftKey && event.keyCode == 123) {
          disabledEvent(e);
      }
      if (e.shiftKey && event.keyCode == 118) {
          disabledEvent(e);
      }
      if (e.shiftKey && event.keyCode == 116) {
          disabledEvent(e);
      }
  }, false);
  function disabledEvent(e) {
      if (e.stopPropagation) {
          e.stopPropagation();
      } else if (window.event) {
          window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
  }
}
//edit: removed ";" from last "}" because of javascript error
function setTheme(themeName) {
localStorage.setItem('theme', themeName);
document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark') {
setTheme('theme-light');
} else {
setTheme('theme-dark');
}
}
// Immediately invoked function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
setTheme('theme-dark');
document.getElementById('slider').checked = false;
} else {
setTheme('theme-light');
document.getElementById('slider').checked = true;
}
})();