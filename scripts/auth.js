async function register() {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-pass').value;
  const { error } = await supabase.auth.signUp({ email, password });
  alert(error ? 'Gagal: ' + error.message : 'Cek email untuk verifikasi');
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-pass').value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert('Gagal login: ' + error.message);
  else window.location.href = 'index.html';
}

async function logout() {
  await supabase.auth.signOut();
  alert('Logout berhasil');
  window.location.href = 'login.html';
}
