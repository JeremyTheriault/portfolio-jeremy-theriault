// AI GENERATED BACKGROUND SCRIPT

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('ocean-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Détection de l'option d'accessibilité (Windows / OS)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Fonction dédiée pour peindre le fond océanique
    function renderBackground() {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = docHeight > 0 ? window.scrollY / docHeight : 0;

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        
        const topR = Math.round(6 - scrollFraction * 4);
        const topG = Math.round(38 - scrollFraction * 20);
        const topB = Math.round(70 - scrollFraction * 35);

        const botR = Math.round(2 - scrollFraction * 2);
        const botG = Math.round(14 - scrollFraction * 10);
        const botB = Math.round(35 - scrollFraction * 20);

        gradient.addColorStop(0, `rgb(${topR}, ${topG}, ${topB})`);
        gradient.addColorStop(1, `rgb(${botR}, ${botG}, ${botB})`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    }

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        if (prefersReducedMotion) renderBackground();
    });

    // ==========================================
    // MODE ACCESSIBILITÉ : MOUVEMENTS RÉDUITS
    // ==========================================
    if (prefersReducedMotion) {
        renderBackground();
        // Met à jour la couleur lors du scroll sans aucune animation superflue
        window.addEventListener('scroll', renderBackground, { passive: true });
        return; // Arrêt complet : pas d'instanciation de bulles ni de boucle animate()
    }

    // ==========================================
    // MODE STANDARD : ANIMATION ACTIVE
    // ==========================================
    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;
        lastScrollY = currentY;

        scrollSpeed = Math.min(Math.max(delta * 0.15, -15), 15);
    }, { passive: true });

    const NUM_BUBBLES = 45;
    const bubbles = [];

    class Bubble {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + Math.random() * 60;
            this.radius = Math.random() * 8 + 3;
            this.baseSpeed = Math.random() * 1.2 + 0.6;
            this.wobbleSpeed = Math.random() * 0.03 + 0.01;
            this.wobbleAmp = Math.random() * 1.5 + 0.5;
            this.angle = Math.random() * Math.PI * 2;
            this.opacity = Math.random() * 0.45 + 0.2;
        }

        update() {
            this.angle += this.wobbleSpeed;
            this.x += Math.sin(this.angle) * this.wobbleAmp;
            this.y -= this.baseSpeed + scrollSpeed;

            if (this.y < -20) {
                this.reset();
            } else if (this.y > height + 70) {
                this.y = -10;
                this.x = Math.random() * width;
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

            ctx.strokeStyle = `rgba(180, 230, 255, ${this.opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            ctx.fillStyle = `rgba(180, 235, 255, ${this.opacity * 0.25})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
                this.x - this.radius * 0.35,
                this.y - this.radius * 0.35,
                this.radius * 0.28,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
            ctx.fill();

            ctx.restore();
        }
    }

    for (let i = 0; i < NUM_BUBBLES; i++) {
        bubbles.push(new Bubble());
    }

    function animate() {
        scrollSpeed *= 0.92;

        renderBackground();

        bubbles.forEach((b) => {
            b.update();
            b.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
});