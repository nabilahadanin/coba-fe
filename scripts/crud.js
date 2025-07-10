const apiBase = 'https://coba-web-olive.vercel.app/api';

async function fetchItems() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert('Silakan login terlebih dahulu');
    return window.location.href = 'login.html';
  }

  document.getElementById('user-info').innerText = user.email;

  fetch(`${apiBase}/get-items`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('item-list');
      list.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <input value="${item.name}" id="input-${item.id}" />
          <button onclick="updateItem(${item.id})">Update</button>
          <button onclick="deleteItem(${item.id})">Hapus</button>
        `;
        list.appendChild(li);
      });
    });
}

function addItem() {
  const name = document.getElementById('item-name').value;
  fetch(`${apiBase}/add-item`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }).then(() => {
    document.getElementById('item-name').value = '';
    fetchItems();
  });
}

function updateItem(id) {
  const name = document.getElementById(`input-${id}`).value;
  fetch(`${apiBase}/update-item?id=${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }).then(() => fetchItems());
}

function deleteItem(id) {
  fetch(`${apiBase}/delete-item?id=${id}`, { method: 'DELETE' })
    .then(() => fetchItems());
}

window.onload = fetchItems;
