import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes';

describe('Componente <App />', () => {
  it('deve permitir adicionar uma transação em Extrato ', () => {
    render(<App />, { wrapper: BrowserRouter });

    const botao = screen.getByRole('button');
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    const select = screen.getByRole('combobox');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(campoValor, '100');
    userEvent.click(botao);

    const novaTransacao = screen.getByTestId('lista-transacoes');
    const itemExtrato = screen.getByRole('listitem');

    expect(novaTransacao).toContainElement(itemExtrato);
  });

  it('deve navegar até a página correspondente ao link clicado ', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaCartoes = screen.getByText('Cartões');
    expect(linkPaginaCartoes).toBeInTheDocument();

    userEvent.click(linkPaginaCartoes);

    const tituloPaginaCartões = await screen.findByText('Meus cartões');
    expect(tituloPaginaCartões).toBeInTheDocument();
  });
});
