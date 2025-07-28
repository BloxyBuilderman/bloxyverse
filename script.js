
const video = document.getElementById('bg-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔇' : '🔊';
});

function prevChapter() {
  window.location.href = "chapter9.html";
}

function nextChapter() {
  window.location.href = "chapter11.html";
}

function loadChapter(chapter) {
  fetch(`chapters/chapter${chapter}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('chapter-content').innerHTML = html;
    });
}
