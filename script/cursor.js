let lastParticleTime = 0;
const particleDelay = 50; 

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  stalker.style.left = `${x}px`;
  stalker.style.top = `${y}px`;

  const now = Date.now();
  if (now - lastParticleTime >= particleDelay) {
    lastParticleTime = now;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  }
});