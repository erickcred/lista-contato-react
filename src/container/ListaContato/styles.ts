import styled from 'styled-components'

export const Tabela = styled.table`
  border-collapse: collapse;
  max-width: 500px;
  width: 100%;

  thead th {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  tbody td,
  thead th {
    padding: 10px 0;
    text-align: center;
  }
`
