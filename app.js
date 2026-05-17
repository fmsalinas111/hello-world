document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('trigger-btn');
  const list = document.getElementById('options-list');
  const items = list.querySelectorAll('li');

  // Mostrar/ocultar lista al hacer clic o tocar en Android
  trigger.addEventListener('click', () => {
    list.classList.toggle('show');
  });

  // Seleccionar elemento y cerrar la lista
  items.forEach(item => {
    item.addEventListener('click', () => {
      trigger.textContent = item.textContent; // Cambia el texto del botón
      trigger.style.color = window.getComputedStyle(item).color; // Copia el color
      list.classList.remove('show'); // Oculta la lista
      
      console.log('Seleccionaste:', item.getAttribute('data-value'));
    });
  });

  // Opcional: cerrar si el usuario toca fuera del menú
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select-wrapper')) {
      list.classList.remove('show');
    }
  });
});
