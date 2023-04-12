import styled, { createGlobalStyle } from 'styled-components'

import { fontes } from './variaveis'

const EstiloGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${fontes.roboto};
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`

export const MainContainer = styled.main`
  height: 100vh;
  padding: 0 20px;
  overflow-y: scroll;
`

export default EstiloGlobal
