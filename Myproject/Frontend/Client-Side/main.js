function footer() {
    foot = document.getElementById('foot');
}

function hamburger() {
    const mobileMenu = document.querySelector('.mobilemenu-list');
    const isVisible = mobileMenu.style.display === 'block';
    
    if (isVisible) {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        const hamburgerButton = document.getElementById('hamburger');
        const mobileMenu = document.querySelector('.mobilemenu-list');
        const mobileMenuContainer = document.querySelector('.mobile-menu');
        
        if (!mobileMenuContainer.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });
});