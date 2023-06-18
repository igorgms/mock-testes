import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';

describe('Rotas', () => {
  it('deve renderizar a rota principal ', () => {
    render(<App />, {
      wrapper: BrowserRouter,
    });
    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });

  it('deve renderizar a rota cartões ', () => {
    render(<Cartoes />);
  });
});
