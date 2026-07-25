/* Artifact screenshots are optional. When one is missing, swap the <img> for a
   styled placeholder tile so the card still reads as finished. Drop the real
   file into assets/ and it takes over with no code change. */
(function () {
  function placeholder(img) {
    var box = img.parentNode;
    var name = img.getAttribute('data-name') || img.alt || 'Artifact';
    img.remove();
    box.classList.add('is-placeholder');
    var title = document.createElement('p');
    title.className = 'ph-name';
    title.textContent = name;
    var hint = document.createElement('p');
    hint.className = 'ph-hint';
    hint.textContent = 'Screenshot coming soon';
    box.append(title, hint);
  }

  document.querySelectorAll('.artifact-media img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) placeholder(img);
    else img.addEventListener('error', function () { placeholder(img); }, { once: true });
  });
})();
