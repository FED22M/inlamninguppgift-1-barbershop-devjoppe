function toggleMobileMenu(menu, btnOpen, btnClose) {
    document.getElementById(menu).classList.toggle('m-open');
    document.getElementById(btnOpen).classList.toggle('m-closed');
    document.getElementById(btnClose).classList.toggle('m-open');
    console.log(menu);
    console.log(btnOpen);
}