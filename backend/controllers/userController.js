fetch('http://localhost:3000/api/dados')
  .then(response => response.json())
  .then(data => {
     console.log(data);   
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });