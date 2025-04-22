let numero = '';
        let numeroPrecedente = '';
        let operazione;

        function cancellaDisplay() {
            numero = '0';
            numeroPrecedente = '';
            operazione;
            aggiornaDisplay();
        }

        function appendNumber(number) {
            if (number === '.' && numero.includes('.')) 
            {
                return;
            }
            numero += number;
            aggiornaDisplay();
        }

        function scegliOperazione(op) {
            if (numero === '')
            {
                return;
            }
            if (numeroPrecedente !== '') //Controlla che il numero precedente non sia vuoto
            {
                calcoli();
            }
            operazione = op;
            numeroPrecedente = numero;
            numero = '';
        }

        function calcoli() {
            let computation;
            const prev = parseFloat(numeroPrecedente);
            const current = parseFloat(numero);
            if (isNaN(prev) || isNaN(current))//isNaN viene usato per controllare se la variabile è un numero, restituisce true o false
            {
                return;
            }
            switch (operazione) {//Switch per decidere che calcolo verrà eseguito
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            numero = computation;
            operazione = undefined;
            numeroPrecedente = '';
            aggiornaDisplay();
        }

        function aggiornaDisplay() {
            const display = document.getElementById('display');
            display.textContent = numero;
        }
