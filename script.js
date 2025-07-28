const video = document.getElementById('bg-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔇' : '🔊';
});

let currentChapter = 10; // You can change this to 1 if you want to start from chapter 1

function loadChapter(chapter) {
  fetch(`chapter${chapter}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('chapter-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('chapter-content').innerHTML = "Failed to load chapter.";
      console.error("Error loading chapter:", error);
    });
}

function prevChapter() {
  if (currentChapter > 1) {
    currentChapter--;
    loadChapter(currentChapter);
  }
}

function nextChapter() {
  if (currentChapter < 10) {
    currentChapter++;
    loadChapter(currentChapter);
  }
}

window.onload = () => {
  loadChapter(currentChapter);
};


// Load initial chapter (e.g., Chapter 10)
loadChapter(10);
