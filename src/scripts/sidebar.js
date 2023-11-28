'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOpenButton = document.getElementById('sidebar-open-button');
    const sidebarCloseButton = document.getElementById('sidebar-close-button');

    sidebarOpenButton.addEventListener('click', () => sidebar.classList.add('sidebar--open'));
    sidebarCloseButton.addEventListener('click', () => sidebar.classList.remove('sidebar--open'));
});