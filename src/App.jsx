import "./App.css";
import Titulo from "./components/titulo";
import Corpo from "./components/corpo";
import Calculo from "./components/calculo";

const mensagemAlerta = (mensagem) => {
  alert(mensagem);
};


function App() {
  return (
    <div className="corpo">
      <Titulo />
      <Corpo mensagemAlerta={mensagemAlerta} />
    </div>
  );
}

//o useEffect posso dizer que é como se fosse um initState do flutter, porém ele sempre é chamado
//ao modificar ou modificado valor em tela 
//modo de uso 

export default App;
