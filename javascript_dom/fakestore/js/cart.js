function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  if (cart.length === 0) {
    container.innerHTML = '<p>Carrinho vazio</p>';
    return;
  }
  cart.forEach(async item => {
    const res = await fetch(`https://fakestoreapi.com/products/${item.id}`);
    const product = await res.json();
    const div = document.createElement('div');
    div.className = 'bg-cyan-800 p-4 rounded flex justify-between items-center';
    div.innerHTML = `
      <span>${product.title} (x${item.qty})</span>
      <span>$${product.price}</span>
    `;
    container.appendChild(div);
  });
}

loadCart();
