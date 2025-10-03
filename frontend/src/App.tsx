import { useEffect, useState } from "react";

type Treino = {
  id: number;
  nome: string;
  descricao: string;
};

export default function App() {
  const [treinos, setTreinos] = useState<Treino[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    // Coloque aqui o link do seu mock do Postman
    fetch("https://1234abcd.mock.pstmn.io/treinos")
      .then(r => {
        if (!r.ok) throw new Error("Erro ao buscar treinos");
        return r.json();
      })
      .then(data => setTreinos(data))
      .catch(err => setErro(String(err)));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Gym App (Front)</h1>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <pre>{treinos ? JSON.stringify(treinos, null, 2) : "Carregando..."}</pre>
    </div>
  );
}
