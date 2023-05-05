import { Titulo } from './styles'

type Props = {
  children: string
}

const TituloPagina = ({ children }: Props) => {
  return <Titulo>{children}</Titulo>
}

export default TituloPagina
