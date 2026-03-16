document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.sidebar-toggle');
  const backdrop = document.querySelector('.sidebar-backdrop');
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  const closeSidebar = () => document.body.classList.remove('sidebar-open');

  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
  });

  backdrop?.addEventListener('click', closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1150) {
      closeSidebar();
    }
  });
});
