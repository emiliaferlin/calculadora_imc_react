import { useState } from "react";

//Exemplo professor


function Calculo (){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resposta, setResposta] = useState('');
    const calculaIMC = () => {
        const alturaMetros = parseFloat(altura);
        const pesoKg = parseFloat(peso);
    
        const imc = pesoKg / (alturaMetros * alturaMetros);
        setResposta(imc);
    }
    return (
        <>
            <h3> Componente Calculo</h3>
            <h2>Resultado: {resposta}</h2>
            <div>
                <label>Numero 1</label>
                <input type="number" value={peso}
                    onChange={e => setPeso(e.target.value)} />
            </div>
            <div>
                <label>Numero 2</label>
                <input type="number" value={altura}
                    onChange={e => setAltura(e.target.value)} />
            </div>
            <button onClick={() => calculaIMC()}>/</button>
        </>
    )
}

export default Calculo;