function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classListcontains('btn-num')) this.addNumDisplay(el);
            if (el.classListcontains('btn-clear')) this.clear(el);
            if (el.classListcontains('btn-del')) this.del(el);
            if (el.classListcontains('btn-eq')) this.realizaConta(el);

        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.inicia = () => {
        this.capturaCliques();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();