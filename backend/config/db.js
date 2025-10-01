const promptTag = document.querySelector('prompt');
// Buscar osdados do backend
fetch('http://localhost:3000/api/mensagem')
  .then(response => response.json())
  .then(data => {
    promptTag.textContent = data.mensagem;
  })
  .catch(error => {
    promptTag.textContent = 'Erro ao carregar mensagem.';
  });