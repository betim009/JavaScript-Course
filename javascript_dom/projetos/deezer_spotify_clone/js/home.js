async function loadTopTracks() {
  try {
    const response = await fetch('https://api.deezer.com/chart/0/tracks');
    const data = await response.json();
    const tracks = data.data || [];
    const container = document.getElementById('tracks');
    container.innerHTML = '';
    for (const track of tracks) {
      const div = document.createElement('div');
      div.className = 'bg-gray-800 rounded p-4';
      div.innerHTML = `
        <img src="${track.album.cover_medium}" alt="${track.title}" class="mb-2 rounded">
        <p class="font-semibold">${track.title}</p>
        <p class="text-sm text-gray-400">${track.artist.name}</p>
      `;
      container.appendChild(div);
    }
  } catch (err) {
    console.error(err);
  }
}
window.addEventListener('DOMContentLoaded', loadTopTracks);
