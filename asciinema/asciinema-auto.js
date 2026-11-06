(function() {
  document.querySelectorAll(".asciinema").forEach(function(element) {
    AsciinemaPlayer.create(element.getAttribute("x-data-cast"),
    element,
    JSON.parse(element.getAttribute("x-data-opts")));
  });
}());