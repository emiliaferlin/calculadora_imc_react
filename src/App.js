import './App.css';
import Titulo from "./view/titulo";
import Corpo from "./view/corpo";

const mensagemAlerta = (mensagem) => {
  alert(mensagem);
}

function App() {
  return (
    <div className="corpo">
      <Titulo/>
      <Corpo mensagemAlerta={mensagemAlerta}/>
    </div>
  );
}

export default App;
