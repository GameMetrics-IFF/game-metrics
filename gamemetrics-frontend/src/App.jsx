import { useEffect, useState } from "react";

function App() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/jogadores")
      .then(res => res.json())
      .then(data => setJogadores(data))
      .catch(err => console.error("Erro ao buscar jogadores:", err));
  }, []);

  return (
    <div>
      <h1>Lista de Jogadores</h1>
      <ul>
        {jogadores.map(j => (
          <li key={j.id}>{j.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;