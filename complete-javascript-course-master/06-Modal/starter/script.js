'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cancel = document.querySelector('.close-modal');

// CICLO PER INTERCETTARE TUTTI GLI ELEMENTI CON CLASSE SHOW-MODAL
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', openModal);
};

cancel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// FUNZIONI

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}