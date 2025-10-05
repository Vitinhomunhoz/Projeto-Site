// frontend/src/pages/PorQueTreinar.tsx

import React from 'react';
import './PorQueTreinar.css';

const PorQueTreinar: React.FC = () => {
  return (
    <div className="porque-treinar-container">
      <header className="porque-treinar-header">
        <h1>Por Que Treinar?</h1>
        <p>Descubra os benefícios que vão além do espelho.</p>
      </header>
      <main className="beneficios-grid">
        <div className="beneficio-card">
          <h2>Melhora a Saúde Mental</h2>
          <p>A atividade física regular é uma grande aliada no combate ao estresse, ansiedade e depressão, pois libera endorfinas, conhecidas como os hormônios da felicidade.</p>
        </div>
        <div className="beneficio-card">
          <h2>Fortalece o Corpo</h2>
          <p>O treinamento de força e os exercícios cardiovasculares aumentam a resistência, a força muscular e a densidade óssea, prevenindo lesões e doenças como a osteoporose.</p>
        </div>
        <div className="beneficio-card">
          <h2>Aumenta a Energia e Disposição</h2>
          <p>Ao contrário do que se pensa, exercitar-se regularmente aumenta seus níveis de energia, melhorando a qualidade do sono e a disposição para as tarefas diárias.</p>
        </div>
        <div className="beneficio-card">
          <h2>Promove a Saúde do Coração</h2>
          <p>Exercícios aeróbicos, como corrida e ciclismo, fortalecem o coração, melhoram a circulação sanguínea e ajudam a controlar a pressão arterial.</p>
        </div>
      </main>
    </div>
  );
};

export default PorQueTreinar;