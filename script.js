const status = document.querySelector('.copy-status');
let statusTimer;

async function copyAddress(ip) {
  try {
    await navigator.clipboard.writeText(ip);
  } catch {
    const field = document.createElement('textarea');
    field.value = ip;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }

  status.textContent = `${ip} copied`;
  status.classList.add('copied');
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    status.textContent = 'click address to copy';
    status.classList.remove('copied');
  }, 2000);
}

document.querySelectorAll('.copy-ip').forEach((address) => {
  address.addEventListener('click', () => copyAddress(address.dataset.ip));
});
