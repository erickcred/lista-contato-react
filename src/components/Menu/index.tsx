import { Link } from 'react-router-dom'

import { Lista } from './styles'

const Menu = () => {
  return (
    <Lista>
      <li>
        <Link to="/">Contatos</Link>
      </li>
      <li>
        <Link to="/cadastro">Cadastro Contato</Link>
      </li>
    </Lista>
  )
}

export default Menu
