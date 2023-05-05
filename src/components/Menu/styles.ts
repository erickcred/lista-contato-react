import styled from 'styled-components'

export const Lista = styled.ul`
  li {
    width: 100%;

    a {
      color: #2d2d29;
      display: block;
      font-weight: bold;
      margin: 10px 0;
      padding: 10px;
      width: 100%;
      text-decoration: none;

      &:hover {
        background-color: #215a6d;
        color: #dfece6;
      }
    }
  }
`
