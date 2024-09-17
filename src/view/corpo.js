import React, { useState } from 'react';

const Corpo = props => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const calcularIMC = (e) => {
        const alturaMetros = parseFloat(altura);
        const pesoKg = parseFloat(peso);
        if (isNaN(pesoKg) || isNaN(alturaMetros)) {
            props.mensagemAlerta("Por favor, insira valores válidos!");
            return;
        }

        const imc = pesoKg / (alturaMetros * alturaMetros);
        props.mensagemAlerta(imc < 18.5 ? `Seu IMC é: ${imc.toFixed(2)}\nClassificação: MAGREZA\nObesidade(GRAU): 0` : 
        imc > 18.5 && imc < 24.9 ? `Seu IMC é: ${imc.toFixed(2)}\nClassificação: NORMAL\nObesidade(GRAU): 0` : 
        imc > 25.0 && imc < 29.9 ? `Seu IMC é: ${imc.toFixed(2)}\nClassificação: SOBREPESO\nObesidade(GRAU): 1` : 
        imc > 30.0 && imc < 39.9 ? `Seu IMC é: ${imc.toFixed(2)}\nClassificação: OBESIDADE\nObesidade(GRAU): 2` : 
        imc > 40.0 ? `Seu IMC é: ${imc.toFixed(2)}\nClassificação: OBESIDADE GRAVE\nObesidade(GRAU): 3` : "");
    };

    return (
        <div className="Calculadora">
            <form id="formulario" onSubmit={calcularIMC}>
                <div>
                    <label htmlFor="peso">Peso: </label>
                    <input 
                        type="text" 
                        id="peso" 
                        value={peso} 
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="altura">Altura: </label>
                    <input 
                        type="text" 
                        id="altura" 
                        value={altura} 
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </div>
                <div className="button">
                    <button type="submit">Calcular IMC</button>
                </div>
            </form>
        </div>
    );
}

export default Corpo;
