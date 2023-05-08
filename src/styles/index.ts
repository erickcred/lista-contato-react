import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
`
