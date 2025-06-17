function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('q') || '';
}

async function searchTracks() {
  const query = getQuery();
  const title = document.getElementById('searchTitle');
  title.textContent = `Resultado para: ${query}`;
  if (!query) return;
  try {
    const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderTracks(data.data || [], 'results');
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', searchTracks);
