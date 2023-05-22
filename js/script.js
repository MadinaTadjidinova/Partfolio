// SCROLL WITH JQUREY
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    });
    // SLIDE-UP
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
    })
});
// NAVBAR WITH JS
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

class Typed {
    constructor(element, cursorElement, strings, options = {}) {
      this.element = element;
      this.cursorElement = cursorElement;
      this.strings = strings;
      this.options = options;
      this.index = 0;
      this.typingComplete = false;
      this.startTyping();
    }
  
    startTyping() {
      const { strings, options } = this;
      const { onComplete, typeSpeed } = options;
  
      if (this.index < strings.length) {
        this.typeString(strings[this.index], () => {
          setTimeout(() => {
            this.startTyping();
          }, typeSpeed);
        });
        this.index++;
      } else {
        this.typingComplete = true;
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }
    }
  
    typeString(string, callback) {
      const { element, cursorElement, options } = this;
      const { typeSpeed } = options;
  
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < string.length) {
          element.textContent += string.charAt(i);
          i++;
        } else {
          clearInterval(intervalId);
          if (typeof callback === 'function') {
            callback();
          }
        }
      }, typeSpeed);
  
      // Show/hide cursor
      const cursorIntervalId = setInterval(() => {
        cursorElement.style.visibility = (cursorElement.style.visibility === 'visible') ? 'hidden' : 'visible';
      }, 500);
  
      // Stop cursor interval when typing is complete
      if (this.typingComplete) {
        clearInterval(cursorIntervalId);
        cursorElement.style.visibility = 'visible';
      }
    }
  }
  
  const typed = new Typed(
    document.getElementById('typed-element'),
    document.getElementById('cursor'),
    ['DevOps Engineer'],
    { typeSpeed: 150, onComplete: () => console.log('Typing complete') }
  );
  