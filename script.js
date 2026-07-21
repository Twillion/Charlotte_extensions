const extensions = [
  {
    name: 'Charlotte Lighting',
    category: 'rendering',
    status: 'Prototype',
    icon: 'CL',
    summary:
      'Forward-plus lighting helpers for projects that need clustered lights, shadows, and material-aware rendering.',
    install: 'Use the package source from packages/charlotte-lighting.',
    tags: ['lighting', 'shadows', 'materials'],
  },
  {
    name: '3D Materials',
    category: '3d',
    status: 'Fork',
    icon: '3D',
    summary:
      'A catalog entry for PBR-oriented material workflows, texture controls, and 3D scene polish in the fork.',
    install: 'Document matching engine build requirements before release.',
    tags: ['pbr', 'textures', 'scene'],
  },
  {
    name: 'Advanced Window',
    category: 'tools',
    status: 'Built-in',
    icon: 'AW',
    summary:
      'Desktop window utilities for Electron exports, including fork-specific presentation and app shell controls.',
    install: 'Available from the fork extension set when desktop support is enabled.',
    tags: ['desktop', 'electron', 'utility'],
  },
  {
    name: 'Debugger Tools',
    category: 'tools',
    status: 'Built-in',
    icon: 'DT',
    summary:
      'Runtime inspection helpers for validating extension behavior while iterating in preview builds.',
    install: 'Enable from the fork and keep debug-only usage out of release builds.',
    tags: ['debugging', 'preview', 'testing'],
  },
];

const grid = document.querySelector('#extension-grid');
const filterButtons = document.querySelectorAll('.filter-button');

function renderExtensions(activeFilter = 'all') {
  grid.innerHTML = extensions
    .map((extension) => {
      const hidden = activeFilter !== 'all' && extension.category !== activeFilter;
      return `
        <article class="extension-card" data-category="${extension.category}" data-hidden="${hidden}">
          <div class="card-top">
            <span class="icon" aria-hidden="true">${extension.icon}</span>
            <span class="badge">${extension.status}</span>
          </div>
          <div>
            <h3>${extension.name}</h3>
            <p>${extension.summary}</p>
          </div>
          <p><strong>Install:</strong> ${extension.install}</p>
          <div class="tag-list" aria-label="${extension.name} tags">
            ${extension.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `;
    })
    .join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderExtensions(button.dataset.filter);
  });
});

renderExtensions();
