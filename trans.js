window.onload = () => {

    const x = document.querySelector('.transition');
    const y = document.querySelectorAll('a');

    setTimeout(() => {
        x.classList.remove('is-active');
    }, 800)

    for (let i = 0; i < y.length; i++) {
        const z = y[i];

        z.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            x.classList.add('is-active');

            setTimeout(() =>{
                window.location.href = target;
            }, 800);
        })
    }
}