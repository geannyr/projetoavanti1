 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    const resultContainer = document.getElementById('searchResult');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = input.value.trim();

      if (query) {
        resultContainer.textContent = `Você buscou por: '${query}'`;
      } else {
        resultContainer.textContent = '';
      }
    });
  });