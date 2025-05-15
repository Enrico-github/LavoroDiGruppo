document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.color-btn');
    const box = document.getElementById('box');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedColor = button.getAttribute('data-color');
        box.style.backgroundColor = selectedColor;
      });
    });
  });
  