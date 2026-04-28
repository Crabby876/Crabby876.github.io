// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Skills marquee =====
const skills = [
  { name: "C#",         icon: "devicon-csharp-plain" },
  { name: "Python",     icon: "devicon-python-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "HTML",       icon: "devicon-html5-plain" },
  { name: "CSS",        icon: "devicon-css3-plain" },
  { name: "MySQL",      icon: "devicon-mysql-plain" },
  { name: "Git",        icon: "devicon-git-plain" },
  { name: "GitHub",     icon: "devicon-github-plain" },
];
const marquee = document.getElementById('marquee');
const list = [...skills, ...skills];

marquee.innerHTML = list.map(s => `
  <div class="skill">
    <i class="${s.icon}"></i>
    <span>${s.name}</span>
  </div>
`).join('');

// ===== Projects =====
const projects = [
  {
    title: "Pingpong Game",
    description: "A pingpong game built in C# (WinForms) with classic mechanics and clean code.",
    href: "https://github.com/Crabby876/lernperiode-3",
    img: "imgs/project1.png",
    tech: ["C#", "WinForms"],
  },
  {
    title: "CarSuggester AI",
    description: "An AI application that helps you find the perfect car based on your preferences.",
    href: "https://github.com/Crabby876/CarSuggester",
    img: "imgs/project2.png",
    tech: ["Python", "Machine Learning", "Pandas"],
  },
  {
    title: "Typing Trainer",
    description: "An app that helps you practice typing and tracks your progress over time.",
    href: "https://github.com/Crabby876/lernperiode-9",
    img: "imgs/project3.png",
    tech: ["Python", "Tkinter"],
  },
  {
    title: "Multiplayer Black Jack",
    description: "This project is an interactive, real-time Blackjack application designed specifically for playing together in the browser. It allows players to create private lobbies, invite friends, and compete against each other and the dealer in classic casino fashion. This project was developed as a collaborative group effort by three people.",
    href: "https://blackjacck21-dubwbnf2eyhjd4b0.swedencentral-01.azurewebsites.net/",
    img: "imgs/project4.png",
    tech: [ "Node.js", "Socket.IO", "Express", "React"],
  },
];
const arrowSVG = '<svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
document.getElementById('projects-list').innerHTML = projects.map((p, i) => `
  <article class="reveal project surf-${i % 3} ${i % 2 === 1 ? 'reverse' : ''}">
    <a class="img" href="${p.href}" target="_blank" rel="noreferrer">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
    </a>
    <div class="info">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
    <a class="arrow" href="${p.href}" target="_blank" rel="noreferrer" aria-label="Open ${p.title}">${arrowSVG}</a>
  </article>
`).join('');

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Hero typing animation =====
const codeText = `print("Doruk Güler")\nprint('"IMS student on a mission to become a coding expert"')`;
const typedEl = document.getElementById('typed');
let i = 0;
function tick() {
  if (i < codeText.length) {
    typedEl.textContent = codeText.slice(0, i + 1);
    i++;
    setTimeout(tick, 45);
  } else {
    setTimeout(showHero, 500);
  }
}
function showHero() {
  const els = [
    { el: document.getElementById('heroBadge'), d: 0 },
    { el: document.getElementById('heroTitle'), d: 150 },
    { el: document.getElementById('heroBio'),   d: 300 },
    { el: document.getElementById('heroBtns'),  d: 500 },
  ];
  els.forEach(({el, d}) => setTimeout(() => el.classList.add('show'), d));
}
tick();
