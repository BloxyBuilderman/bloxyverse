
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
