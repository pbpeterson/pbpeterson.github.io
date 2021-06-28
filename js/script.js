const loading = document.querySelector('.loading');
const content = document.querySelector('.content');

setTimeout(() => {
  loading.classList.add('hidden');
  content.classList.remove('hidden');
}, 3500);

const svgDraw = document.querySelector('.main svg path');
const svgLength = Math.floor(svgDraw.getTotalLength());

function scrollIntoSection() {
  const buttonProjects = document.querySelector('.linkProject');

  buttonProjects.addEventListener('click', (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const firstProject = document.querySelector(href);
    firstProject.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

function slideAnimation() {
  const projects = document.querySelectorAll('.project');
  const triggerBottom = (window.innerHeight / 9) * 4;
  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', slideAnimation);
scrollIntoSection();
