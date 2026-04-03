import { useState } from 'react';

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
}

function App() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  const carregarProfissionais = () => {
    const dados = [
        { id: 1, nome: 'Ana Souza', especialidade: 'Manicure' },
        { id: 2, nome: 'Carlos Silva', especialidade: 'Cabeleireiro' },
        { id: 3, nome: 'Marina Santos', especialidade: 'Esteticista' }
    ];
    
    setProfissionais(dados);
    setMostrarLista(true); 
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', color: '#333' }}>
      <h1>Plataforma de Saúde & Beleza</h1>
      <p>Bem-vindo ao sistema de agendamentos.</p>
      
      <button 
        onClick={carregarProfissionais} 
        style={{ 
          backgroundColor: '#e84393', 
          color: '#fff', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Ver Profissionais
      </button>

      {/* A lista abaixo só aparece se o mostrarLista for verdadeiro (após o clique) */}
      {mostrarLista && (
        <div style={{ marginTop: '20px' }}>
          <h2>Profissionais Disponíveis:</h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {profissionais.map((prof) => (
              <div key={prof.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{prof.nome}</h3>
                <p style={{ margin: 0, color: '#666' }}>{prof.especialidade}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;