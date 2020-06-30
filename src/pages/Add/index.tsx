import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import Header from '../../components/Header';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title } from './styles';

interface Transaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

const Add: React.FC = () => {
  const history = useHistory();
  async function handleSubmit(data: object): Promise<void> {
    await api.post('transactions', data);
    history.push('/');
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastrar nova transação</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título da transação" />
          <br />
          <Input name="value" placeholder="Valor da transação" />
          <br />
          <Input name="type" placeholder="Tipo da transação" />
          <br />
          <Input name="category" placeholder="Categoria da transação" />
          <br />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Add;
