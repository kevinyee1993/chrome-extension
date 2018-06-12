(function() {
  console.log("bookmarklet starting");

  let paragraphs = document.getElementsByTagName('p');
  for(let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = 'kona!';
  }
})();

(function() {
  let script = document.createElement('script');
  script.src = 'bookmarklet.js';
  document.body.appendChild(script);
})();
