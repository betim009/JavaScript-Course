async function loadProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const container = document.getElementById('productList');
  container.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-cyan-800 p-4 rounded';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="h-40 mx-auto mb-2 object-contain">
      <h3 class="font-semibold mb-1">${p.title}</h3>
      <p class="mb-2">$${p.price}</p>
      <a href="product.html?id=${p.id}" class="underline">Ver detalhes</a>
      <button class="block mt-2 bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded" onclick="addToCart(${p.id})">Adicionar</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const exists = cart.find(i => i.id === id);
  if (!exists) cart.push({ id, qty: 1 });
  else exists.qty += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Adicionado ao carrinho');
}

loadProducts();
