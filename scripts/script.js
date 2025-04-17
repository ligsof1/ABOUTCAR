document.addEventListener('DOMContentLoaded', () => {
    const languageMenu = document.querySelector('.homepage-header-language');
    const dropdown = document.querySelector('.language-dropdown');
    const searchInput = document.querySelector('.language-search input');
    const languageItems = Array.from(dropdown.querySelectorAll('li:not(.language-search)'));

    // Показать/скрыть выпадающий список
    languageMenu.addEventListener('click', (event) => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); // Остановить всплытие события
    });

    // Предотвращение закрытия меню при клике внутри него
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Остановить всплытие события
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });

    // Фильтрация языков
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        languageItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? 'block' : 'none';
        });
    });
});