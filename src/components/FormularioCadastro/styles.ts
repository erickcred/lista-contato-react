import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #92c7a3;
  border-radius: 4px;
  width: 100%;
  padding: 8px;

  &:focus-visible {
    outline-color: #92c7a3;
  }
`

export const Botao = styled.button`
  background-color: #dfece6;
  border: none;
  border-radius: 4px;
  color: #2d2d29;
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;
  padding: 6px 12px;

  &:hover {
    background-color: #92c7a3;
    color: #2d2d20;
  }
`
