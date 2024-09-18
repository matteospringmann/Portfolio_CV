// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation du header
gsap.from('header', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: 'header',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});

// Animation de la section d'introduction
gsap.from('#introduction .content-introduction', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '#introduction',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});

// Animation des compétences
gsap.from('#competences-section .skill', {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#competences-section',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});

// Animation des projets
// gsap.utils.toArray('#projets .projet').forEach(projet => {
//   gsap.fromTo(projet, 
//     {opacity: 0, y: 50},
//     {
//       opacity: 1, 
//       y: 0, 
//       duration: 1,
//       scrollTrigger: {
//         trigger: projet,
//         start: 'top bottom-=100',
//         end: 'bottom top+=100',
//         toggleActions: 'play none none none',
//         onEnter: () => projet.classList.add('projet-visible')
//       }
//     }
//   );
// });

// Animation de la section offre
gsap.from('#offre .offre', {
  opacity: 0,
  x: -50,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#offre',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});

// Animation de la section contact
gsap.from('#contact', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});

// Animation du footer
gsap.from('footer', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top bottom',
    end: 'bottom top',
    toggleActions: 'play none none reset',
  }
});