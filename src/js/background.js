// AI GENERATED BACKGROUND SCRIPT

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('ocean-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // --- Suivi de la vélocité du Scroll ---
    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;
        lastScrollY = currentY;

        // La vélocité propulse ou fait réagir les bulles selon l'intensité du défilement
        scrollSpeed = Math.min(Math.max(delta * 0.15, -15), 15);
    }, { passive: true });

    // --- Système de bulles ---
    const NUM_BUBBLES = 45;
    const bubbles = [];

    class Bubble {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + Math.random() * 60;
            this.radius = Math.random() * 8 + 3; // Taille de la bulle
            this.baseSpeed = Math.random() * 1.2 + 0.6; // Vitesse de montée
            this.wobbleSpeed = Math.random() * 0.03 + 0.01;
            this.wobbleAmp = Math.random() * 1.5 + 0.5;
            this.angle = Math.random() * Math.PI * 2;
            this.opacity = Math.random() * 0.45 + 0.2;
        }

        update() {
            // Effet d'oscillation horizontale naturelle
            this.angle += this.wobbleSpeed;
            this.x += Math.sin(this.angle) * this.wobbleAmp;

            // Déplacement vertical : vitesse de base + impulsion du scroll
            this.y -= this.baseSpeed + scrollSpeed;

            // Réapparition en bas si elle sort par le haut
            if (this.y < -20) {
                this.reset();
            }
            // Réapparition en haut si on scrolle violemment vers le haut
            else if (this.y > height + 70) {
                this.y = -10;
                this.x = Math.random() * width;
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

            // Contour translucide de la bulle
            ctx.strokeStyle = `rgba(180, 230, 255, ${this.opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Remplissage léger
            ctx.fillStyle = `rgba(180, 235, 255, ${this.opacity * 0.25})`;
            ctx.fill();

            // Reflet lumineux à l'intérieur
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

    // --- Boucle d'animation principale ---
    function animate() {
        // Amortissement du scroll (inertie douce)
        scrollSpeed *= 0.92;

        // Dégradé océanique réagissant à la profondeur totale de la page
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = docHeight > 0 ? window.scrollY / docHeight : 0;

        // Transition de couleur : turquoise/bleu lagon en haut -> bleu abyssal profond en bas
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        
        // Teintes calculées dynamiquement selon la hauteur de défilement
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

        // Mise à jour et affichage des bulles
        bubbles.forEach((b) => {
            b.update();
            b.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
});