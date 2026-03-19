let lastParticleTime = 0;
const particleDelay = 50; 

document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastParticleTime >= particleDelay) {
    lastParticleTime = now;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1200);
  }
});