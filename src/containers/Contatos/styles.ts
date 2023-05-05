import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`

export const Button = styled.button`
  background-color: #92c7a3;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  margin-right: 6px;
  padding: 2px 4px;
`

export const ButtonExclir = styled(Button)`
  background-color: #920;
`
