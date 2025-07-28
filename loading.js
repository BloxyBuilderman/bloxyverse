console.log("Loading script started...");
setTimeout(() => {
  console.log("Redirecting...");
  window.location.href = "index.html";
}, 5000);

function loadChapter(chapter) {
  fetch(`chapters/chapter${chapter}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('chapter-content').innerHTML = html;
    });
}
