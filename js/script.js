const loading = document.querySelector('.loading');
const content = document.querySelector('.content');
const footer = document.querySelector('footer')

setTimeout(() => {
  loading.classList.add('hidden');
  content.classList.remove('hidden');
}, 3500);

let arrayAnime = []
arrayAnime.push(footer)

const projects = document.querySelectorAll('.project');
projects.forEach((projeto) => {
  arrayAnime.push(projeto)
})

function slideAnimation() {

  const triggerBottom = (window.innerHeight / 7) * 6;
  arrayAnime.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', slideAnimation);

