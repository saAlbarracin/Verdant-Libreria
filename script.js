// script.js

// Function to render books to a container
function renderBooks(booksToRender, containerId, className) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    booksToRender.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = className;

        // Construct HTML content
        let html = '';

        // Add "Envio Gratis" badge for 'obras-destacadas' style items
        if (className === 'obras-destacadas') {
             html += `<h4>Envio Gratis</h4>`;
        }

        html += `<img src="${book.image}" alt="${book.title}">`;

        // Use title as the main header
        html += `<h3>${book.title}</h3>`;

        html += `<p>${book.price}</p>`;

        bookDiv.innerHTML = html;
        container.appendChild(bookDiv);
    });
}

function renderInitialState() {
    // Render Destacados (index.html)
    const destacados = books.filter(b => b.category === 'destacados');
    renderBooks(destacados, 'container-destacados', 'obras-destacadas');

    // Render Casa (index.html)
    const casa = books.filter(b => b.category === 'casa');
    renderBooks(casa, 'container-casa', 'libros-casa');

    // Render Terror (terror.html)
    const terror = books.filter(b => b.category === 'terror');
    renderBooks(terror, 'container-terror', 'obras-destacadas');

    // Render Suspenso (suspenso.html)
    const suspenso = books.filter(b => b.category === 'suspenso');
    renderBooks(suspenso, 'container-suspenso', 'obras-destacadas');
}

function handleSearch(query) {
    // If query is empty, re-render initial state
    if (!query || !query.trim()) {
        renderInitialState();
        return;
    }

    const lowerQuery = query.toLowerCase();
    const results = books.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        (book.author && book.author.toLowerCase().includes(lowerQuery))
    );

    const containerDestacados = document.getElementById('container-destacados');
    const containerTerror = document.getElementById('container-terror');
    const containerSuspenso = document.getElementById('container-suspenso');
    const containerCasa = document.getElementById('container-casa');

    let targetContainer = null;
    let targetClass = 'obras-destacadas'; // Default style to use for search results

    // Determine where to show results
    if (containerDestacados) {
        targetContainer = containerDestacados;
        // Also clear secondary container on home page
        if (containerCasa) containerCasa.innerHTML = '';
    } else if (containerTerror) {
        targetContainer = containerTerror;
    } else if (containerSuspenso) {
        targetContainer = containerSuspenso;
    }

    if (targetContainer) {
        renderBooks(results, targetContainer.id, targetClass);

        // If no results found
        if (results.length === 0) {
            targetContainer.innerHTML = '<p style="padding: 20px; font-size: 1.2em; font-weight: bold; color: #333;">No se encontraron libros que coincidan con tu búsqueda.</p>';
        }
    }
}

function init() {
    renderInitialState();

    // Setup Search
    const searchBtn = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            handleSearch(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
    }
}

// Run init when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
