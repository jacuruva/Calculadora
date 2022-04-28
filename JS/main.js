function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },


        pressionaBackSpace() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.apagaUm();
              }
            });
          },


        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
          },

        realizaConta() {
            let = conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida')
                    return;
                }
                
                this.display.value = String(conta);
            }catch(e) {
                alert('Conta inválida')
                return;
            }
        },

        realizaRaiz() {
            let = num = this.display.value

            try {
                const raiz = num ** (1/2);

                this.display.value = String(raiz);
            } catch(e) {
                alert('Raiz quadrada inválida')
                return;
            }
        },

        realizaRaiz3() {
            let = num = this.display.value

            try {
                const raiz3 = num ** (1/3);

                this.display.value = String(raiz3.toFixed(14));
            } catch(e) {
                alert('Raiz cubica inválida')
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                if(el.classList.contains('btn-raiz')) {
                    this.realizaRaiz();
                }

                if(el.classList.contains('btn-raiz3')) {
                    this.realizaRaiz3();
                }
             });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()