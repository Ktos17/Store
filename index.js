document.addEventListener('DOMContentLoaded', function() {
    const sidebarIcon = document.querySelector('.menu-icon-fixed');
    let counter = 1;
    const sidebar = document.querySelector('.sidebar');
    const swiftoLogo = document.querySelector('.swifto-logo');
    const cartIcon = document.querySelector('.cart-icon');
    const searchIcon = document.querySelector('.search-icon-fixed');
    const searchInput = document.querySelector('.search-fixed');

    sidebarIcon.addEventListener('click', () => {
        counter += 1;
        console.log(counter);
        if (counter === 2) {
            sidebar.style.width = '140px';
            sidebarIcon.style.marginLeft = '160px';
            swiftoLogo.style.marginLeft = '450px';
            searchIcon.style.marginLeft = '900px';
            cartIcon.style.marginRight = '40px';
            cartIcon.style.marginLeft = '0px';
            searchInput.style.marginLeft = '120px';
            searchIcon.style.marginRight = '0px';
            counter = 0;
        } else {
            sidebar.style.width = '0px';
            counter = 1;
            sidebarIcon.style.marginLeft = '10px';
        };
    });
});
