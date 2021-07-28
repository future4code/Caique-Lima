import React from 'react'
import styled from 'styled-components'

import './App.css'
import Lista from './Components/Lista'
import Cadastro from './Components/Cadastro'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    logado: false
  }

  alteraPagina = () => {
    this.setState({ logado: !this.state.logado })
  }

  render() {
    return (
      <Container>
        <h1>Bem vindo(a)</h1>
        {this.state.logado ? <Lista alteraPagina={this.alteraPagina} /> : <Cadastro alteraPagina={this.alteraPagina} />}
      </Container>
    )
  }

}

export default App;