/* TETE */
const nav_mobile = document.getElementById('nav_mobile');
const nav_pc = document.getElementById('nav_pc');

nav_mobile.addEventListener('click', () => {
    nav_mobile.classList.add('clicked');
    nav_mobile.classList.toggle('active');
    nav_pc.classList.toggle('visible');
});

// Ce bout de code empêche l’animation de repartir en boucle au resize. Si on passe en mode PC (> 600px), on FORCE le retour à l’état initial
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        nav_mobile.classList.remove('clicked', 'active');
        nav_pc.classList.remove('visible');
    }
});

// Au chargement de la page aussi (au cas où on ouvre directement en grand)
window.addEventListener('load', () => {
    if (window.innerWidth > 600) {
        nav_mobile.classList.remove('clicked', 'active');
        nav_pc.classList.remove('visible');
    }
});

/* 
// Vérificateur de code
(function() {
    const style = document.createElement("style");
    style.innerHTML = `
        * {
            outline: 1px solid rgba(0,255,255,0.3);
        }
        *:hover {
            outline: 2px solid rgba(255,0,0,0.6);
        }
    `;
    document.head.appendChild(style);
})(); 
*/
