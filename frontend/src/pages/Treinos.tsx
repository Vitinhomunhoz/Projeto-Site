export type Treino = {
  id: number;
  nome: string;
  descricao: string;
};

export async function getTreinos(): Promise<Treino[]> {
  const response = await fetch("https://1234abcd.mock.pstmn.io/treinos");
  if (!response.ok) throw new Error("Erro ao buscar treinos do mock");
  return response.json();
}