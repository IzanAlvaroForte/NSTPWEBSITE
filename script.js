document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('Mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');
    
    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    });

    closeMenu?.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
    
    overlay?.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });

    document.querySelectorAll('.menu-header').forEach(header => {
        header.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const submenu = this.nextElementSibling;
            if (window.innerWidth < 1024) {
                icon?.classList.toggle('rotate-180');
                submenu.classList.toggle('max-h-0');
                submenu.classList.toggle('max-h-[500px]');
            }
            else {
            }
        });
    });
    if (window.innerWidth < 1024) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.classList.add('max-h-0');
        });
    }
});