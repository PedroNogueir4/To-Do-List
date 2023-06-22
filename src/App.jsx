import { useState } from "react"

import { Container,Button,ContainerMain } from "./styles"

function App() {
 const [ list, setList ]=useState([])


  return (
    <Container>
      <ContainerMain>
      <div>
        <input placeholder="O que tenho que fazer..."/>
        <Button>Adicionar</Button>
      </div>
      <ul>
        <li>Almoçar</li>
        <li>Estudar</li>
        <li>Ver serie</li>
      </ul>
      </ContainerMain>
    </Container>
  )
}

export default App
