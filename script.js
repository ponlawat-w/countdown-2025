const h1 = document.querySelector('h1');
const target = new Date(2025, 0, 1, 0, 0, 0, 0);

const interval = setInterval(() => {
  const diff = target.getTime() - new Date().getTime();
  if (diff < 0) {
    h1.innerHTML = 'あけおめ<br>สวัสดีปีใหม่';
    h1.style.fontFamily = 'sans-serif';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '10em';
    clearInterval(interval);
    return;
  }
  const hours = Math.floor(diff / 3600_000) % 24;
  const minutes = Math.floor(diff / 60_000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  h1.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 250);
