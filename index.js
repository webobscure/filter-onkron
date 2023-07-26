function rotateDeg() {
    this.classList.toggle('rotate');
}

document.querySelectorAll('.fa-arrow-up').forEach(img => img.addEventListener('click', rotateDeg))


