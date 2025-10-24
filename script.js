// Global variable for mock Spotify song
let currentSong = {
  title: "I Dreamed a Dream",
  artist: "Susan Boyle",
  albumArt: "images/i_dreamed_a_dream.jpg"
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  // === Theme Toggle ===
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // === Spotify Mock Popup ===
  const spotifyPopup = document.createElement('div');
  spotifyPopup.className = 'spotify-popup';
  spotifyPopup.innerHTML = `
    <img src="${currentSong.albumArt}" alt="Album Art">
    <div class="spotify-info">
      <h4>${currentSong.title}</h4>
      <p>${currentSong.artist}</p>
    </div>
  `;
  document.body.appendChild(spotifyPopup);

  let popupVisible = false;

  // Toggle popup on keypress "M"
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
      popupVisible = !popupVisible;
      spotifyPopup.classList.toggle('visible', popupVisible);
    }
  });
});
