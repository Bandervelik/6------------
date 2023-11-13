document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('change', function () {
      if (themeToggle.checked) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
      } else {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
      }
  });
});
