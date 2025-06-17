function renderTracks(tracks, containerId, removable = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (const track of tracks) {
    const div = document.createElement('div');
    div.className = 'bg-cyan-800 text-white rounded p-4 flex flex-col';
    div.innerHTML = `
      <img src="${track.album.cover_medium}" alt="${track.title}" class="mb-2 rounded">
      <p class="font-semibold">${track.title}</p>
      <p class="text-sm text-cyan-200">${track.artist.name}</p>
      <audio controls class="w-full mt-2" src="${track.preview}"></audio>
      <button class="mt-2 bg-cyan-200 text-black p-1 rounded favorite-btn flex items-center gap-1">${removable ? '<i class="bi bi-trash"></i> Remover' : '<i class="bi bi-heart"></i> Favoritar'}</button>
    `;
    const btn = div.querySelector('.favorite-btn');
    btn.addEventListener('click', () => {
      toggleFavorite(track, removable);
      if (removable) div.remove();
    });
    container.appendChild(div);
  }
}

function toggleFavorite(track, remove = false) {
  const key = 'deezerFavorites';
  const favs = JSON.parse(localStorage.getItem(key)) || [];
  if (remove) {
    const updated = favs.filter(t => t.id !== track.id);
    localStorage.setItem(key, JSON.stringify(updated));
    return;
  }
  if (!favs.find(t => t.id === track.id)) {
    favs.push(track);
    localStorage.setItem(key, JSON.stringify(favs));
  }
}

async function loadGenres() {
  try {
    const response = await fetch('https://api.deezer.com/genre');
    const data = await response.json();
    const select = document.getElementById('genreSelect');
    select.innerHTML = '<option value="0">Todos</option>';
    for (const genre of data.data || []) {
      const opt = document.createElement('option');
      opt.value = genre.id;
      opt.textContent = genre.name;
      select.appendChild(opt);
    }
    select.addEventListener('change', () => loadTopTracks(select.value));
  } catch (err) {
    console.error(err);
  }
}

async function loadTopTracks(genreId = '0') {
  try {
    const response = await fetch(`https://api.deezer.com/chart/${genreId}/tracks`);
    const data = await response.json();
    renderTracks(data.data || [], 'tracks');
  } catch (err) {
    console.error(err);
  }
}

function setupSearch() {
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim();
    if (q) {
      window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  loadGenres();
  loadTopTracks();
});
