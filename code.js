function typeWriter(elemento, delay = 65) {
    return new Promise(resolve => {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                if (i === textoArray.length - 1) resolve();
            }, delay * i);
        });
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    const blocos = document.querySelectorAll('.code');
    for (const bloco of blocos) {
        await typeWriter(bloco);
    }
});
