/**

- Oblivion GMunk Theme - Advanced Animations
- Particle systems and interface effects inspired by the movie Oblivion
  */

class OblivionAnimations {
constructor() {
this.particles = [];
this.canvas = null;
this.ctx = null;
this.animationId = null;
this.isInitialized = false;

```
// Configuration
this.config = {
  particleCount: 50,
  particleSpeed: 0.5,
  particleSize: 2,
  glowEffect: true,
  scanlineEffect: true,
  interfaceGlow: true,
  backgroundParticles: true
};

this.init();
```

}

init() {
if (this.isInitialized) return;

```
// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => this.setup());
} else {
  this.setup();
}
```

}

setup() {
this.createCanvas();
this.createParticles();
this.addInterfaceEffects();
this.startAnimation();
this.addEventListeners();
this.isInitialized = true;

```
console.log('🚀 Oblivion GMunk animations initialized');
```

}

createCanvas() {
// Create background canvas for particle effects
this.canvas = document.createElement(‘canvas’);
this.canvas.id = ‘oblivion-particles’;
this.canvas.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1; opacity: 0.6;`;

```
document.body.appendChild(this.canvas);
this.ctx = this.canvas.getContext('2d');
this.resizeCanvas();
```

}

resizeCanvas() {
if (!this.canvas) return;

```
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
```

}

createParticles() {
this.particles = [];

```
for (let i = 0; i < this.config.particleCount; i++) {
  this.particles.push({
    x: Math.random() * this.canvas.width,
    y: Math.random() * this.canvas.height,
    vx: (Math.random() - 0.5) * this.config.particleSpeed,
    vy: (Math.random() - 0.5) * this.config.particleSpeed,
    size: Math.random() * this.config.particleSize + 1,
    opacity: Math.random() * 0.8 + 0.2,
    hue: 190 + Math.random() * 20, // Teal range
    pulse: Math.random() * Math.PI * 2
  });
}
```

}

updateParticles() {
this.particles.forEach(particle => {
// Update position
particle.x += particle.vx;
particle.y += particle.vy;

```
  // Wrap around screen edges
  if (particle.x < 0) particle.x = this.canvas.width;
  if (particle.x > this.canvas.width) particle.x = 0;
  if (particle.y < 0) particle.y = this.canvas.height;
  if (particle.y > this.canvas.height) particle.y = 0;
  
  // Update pulse for glow effect
  particle.pulse += 0.02;
});
```

}

drawParticles() {
if (!this.ctx) return;

```
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

this.particles.forEach(particle => {
  const glowIntensity = (Math.sin(particle.pulse) + 1) * 0.5;
  const alpha = particle.opacity * glowIntensity;
  
  // Draw particle glow
  if (this.config.glowEffect) {
    const gradient = this.ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 3
    );
    gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${alpha})`);
    gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 70%, 0)`);
    
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
    this.ctx.fill();
  }
  
  // Draw particle core
  this.ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${alpha})`;
  this.ctx.beginPath();
  this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  this.ctx.fill();
});

// Draw connecting lines between nearby particles
this.drawConnections();
```

}

drawConnections() {
const maxDistance = 100;

```
for (let i = 0; i < this.particles.length; i++) {
  for (let j = i + 1; j < this.particles.length; j++) {
    const p1 = this.particles[i];
    const p2 = this.particles[j];
    
    const distance = Math.sqrt(
      Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    );
    
    if (distance < maxDistance) {
      const opacity = (1 - distance / maxDistance) * 0.3;
      
      this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
    }
  }
}
```

}

addInterfaceEffects() {
// Add CSS for interface glow effects
const style = document.createElement(‘style’);
style.id = ‘oblivion-effects’;
style.textContent = `
/* Oblivion Interface Effects */

```
  /* Card glow effects */
  .oblivion-glow ha-card {
    box-shadow: 
      0 0 20px rgba(0, 212, 255, 0.2),
      inset 0 1px 0 rgba(0, 212, 255, 0.1) !important;
    border: 1px solid rgba(0, 212, 255, 0.3);
    transition: all 0.3s ease;
  }
  
  .oblivion-glow ha-card:hover {
    box-shadow: 
      0 0 30px rgba(0, 212, 255, 0.4),
      inset 0 1px 0 rgba(0, 212, 255, 0.2) !important;
    transform: translateY(-2px);
  }
  
  /* Scanning line effect */
  @keyframes oblivion-scan {
    0% { transform: translateY(-100vh); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  
  .oblivion-scanline {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 212, 255, 0.8),
      transparent
    );
    animation: oblivion-scan 8s linear infinite;
    pointer-events: none;
    z-index: 9999;
  }
  
  /* Typing effect for text */
  @keyframes oblivion-type {
    from { width: 0; }
    to { width: 100%; }
  }
  
  .oblivion-typing {
    overflow: hidden;
    border-right: 2px solid #00D4FF;
    animation: 
      oblivion-type 2s steps(40, end),
      blink-caret 1s step-end infinite;
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #00D4FF; }
  }
  
  /* Pulse effect for important elements */
  @keyframes oblivion-pulse {
    0%, 100% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.2); }
    50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6); }
  }
  
  .oblivion-pulse {
    animation: oblivion-pulse 2s ease-in-out infinite;
  }
  
  /* Matrix-style background pattern */
  .oblivion-matrix::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: -2;
    animation: matrix-move 20s linear infinite;
  }
  
  @keyframes matrix-move {
    0% { transform: translateY(0); }
    100% { transform: translateY(50px); }
  }
`;

document.head.appendChild(style);

// Add scanning line effect
if (this.config.scanlineEffect) {
  const scanline = document.createElement('div');
  scanline.className = 'oblivion-scanline';
  document.body.appendChild(scanline);
}

// Add glow effects to cards
if (this.config.interfaceGlow) {
  document.body.classList.add('oblivion-glow');
}

// Add matrix background
document.body.classList.add('oblivion-matrix');
```

}

startAnimation() {
const animate = () => {
if (this.config.backgroundParticles) {
this.updateParticles();
this.drawParticles();
}

```
  this.animationId = requestAnimationFrame(animate);
};

animate();
```

}

addEventListeners() {
// Resize handler
window.addEventListener(‘resize’, () => {
this.resizeCanvas();
this.createParticles(); // Recreate particles for new dimensions
});

```
// Theme change handler
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && 
        mutation.attributeName === 'data-applied-theme') {
      // Theme changed, update effects if needed
      this.updateThemeEffects();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-applied-theme']
});

// Performance monitoring
let lastTime = performance.now();
const checkPerformance = () => {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  
  if (deltaTime > 50) { // If frame took more than 50ms
    console.warn('Oblivion animations: Performance warning, consider reducing particle count');
  }
  
  lastTime = currentTime;
  requestAnimationFrame(checkPerformance);
};

checkPerformance();
```

}

updateThemeEffects() {
const currentTheme = document.documentElement.getAttribute(‘data-applied-theme’);

```
if (currentTheme && currentTheme.includes('oblivion')) {
  // Oblivion theme is active, ensure effects are enabled
  if (!document.getElementById('oblivion-effects')) {
    this.addInterfaceEffects();
  }
} else {
  // Different theme, remove effects
  this.removeEffects();
}
```

}

removeEffects() {
// Remove canvas
if (this.canvas) {
this.canvas.remove();
this.canvas = null;
}

```
// Remove styles
const style = document.getElementById('oblivion-effects');
if (style) style.remove();

// Remove classes
document.body.classList.remove('oblivion-glow', 'oblivion-matrix');

// Remove scanline
const scanline = document.querySelector('.oblivion-scanline');
if (scanline) scanline.remove();

// Stop animation
if (this.animationId) {
  cancelAnimationFrame(this.animationId);
  this.animationId = null;
}

this.isInitialized = false;
```

}

// Public methods for customization
setParticleCount(count) {
this.config.particleCount = count;
this.createParticles();
}

toggleEffect(effectName) {
if (this.config.hasOwnProperty(effectName)) {
this.config[effectName] = !this.config[effectName];

```
  if (effectName === 'backgroundParticles' && !this.config[effectName]) {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
```

}

destroy() {
this.removeEffects();
console.log(‘🚀 Oblivion GMunk animations destroyed’);
}
}

// Auto-initialize when script loads
let oblivionAnimations = null;

// Check if we’re in the right theme
const checkAndInitialize = () => {
const currentTheme = document.documentElement.getAttribute(‘data-applied-theme’);

if (currentTheme && currentTheme.includes(‘oblivion’)) {
if (!oblivionAnimations) {
oblivionAnimations = new OblivionAnimations();
}
} else if (oblivionAnimations) {
oblivionAnimations.destroy();
oblivionAnimations = null;
}
};

// Initialize on load
if (document.readyState === ‘loading’) {
document.addEventListener(‘DOMContentLoaded’, checkAndInitialize);
} else {
checkAndInitialize();
}

// Watch for theme changes
const themeObserver = new MutationObserver(() => {
setTimeout(checkAndInitialize, 100); // Small delay to ensure theme is applied
});

themeObserver.observe(document.documentElement, {
attributes: true,
attributeFilter: [‘data-applied-theme’]
});

// Export for manual control
window.OblivionAnimations = OblivionAnimations;
window.oblivionAnimations = oblivionAnimations;
