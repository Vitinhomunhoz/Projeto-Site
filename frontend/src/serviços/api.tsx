export async function getTreinos() {
  const response = await fetch("https://1234abcd.mock.pstmn.io/treinos");
  return response.json();
}
