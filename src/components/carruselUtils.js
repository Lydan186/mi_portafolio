

export function loadRepositories(carouselContainerId) {
  const carouselContainer = document.getElementById(carouselContainerId);

  fetch('https://api.github.com/users/Lydan186/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach(repo => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('flex-none', 'w-100', 'snap-center');

        projectElement.innerHTML = `
          <div className="bg-gradient-to-r from-blue-500 to-green-500 shadow-md rounded-lg overflow-hidden">
            <img src="${repo.owner.avatar_url}" alt="${repo.name}" className="w-full h-40 object-cover" style="object-fit: cover;">
            <div class="p-4">
              <h3 class="text-white text-lg font-bold mb-2">${repo.name}</h3>
              <p class="text-white">${repo.description}</p>
              <a href="${repo.html_url}" class="text-white font-bold py-2 px-4 rounded mt-4">Ver Proyecto</a>
            </div>
          </div>
        `;

        carouselContainer.appendChild(projectElement);
      });
    })
    .catch(error => {
      console.error('Error al obtener los repositorios:', error);
    });
}

