// Accordion - go to item in hash.
(function() {
  document.addEventListener("DOMContentLoaded", function() {

    var identifier = window.location.hash;

    if (identifier) {
      var accordionItem = document.querySelector(identifier);

      if (accordionItem) {
        var listItem = accordionItem.closest('li');
        var button = listItem.querySelector('.accordion-button');

        // Expand item.
        listItem.setAttribute('aria-expanded', 'false');
        listItem.setAttribute('aria-hidden', 'true');

        button.setAttribute('aria-expanded', 'false');

        // Scroll into view.
        setTimeout(function() {
          button.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  });
})();

// Accordion - add link on click.
(function() {
  var buttons = document.querySelectorAll('.js-accordion-add-link');

  function handleClick(event) {
    var element = this;
    var elementID = element.getAttribute('aria-controls');

    history.pushState({}, '', '#' + elementID);
  }

  for (var i = 0; i < buttons.length; i += 1) {
    var button = buttons[i];

    button.addEventListener('click', handleClick);
  }
})();
