import React,{ useState } from "react"
import { v4 as uuid } from "uuid"

import { Container,Button,ContainerMain,ContainerItens,Itens,Check,Delete } from "./styles"

function App() {
 const [ list, setList ]=useState([])
 const [ task, setTask ]=useState('')

function setActivity() {
 setList([...list,{ id:uuid(), main:task, finished:false}])
}

function getActivity(event) {
 setTask(event.target.value)
}

function finishedTask(id){
  const newList = list.map(item=>(
    item.id === id ? {...item,finished: !item.finished} : item
))
setList(newList)
}

function deleteTask(id){
  const newList = list.filter(item=>(
    item.id != id
))
setList(newList)
}

  return (
    <Container>
      <ContainerMain>
      <div>
        <input onChange={getActivity} placeholder="Tarefas..."/>
        <Button onClick={setActivity}>Adicionar</Button>
      </div>
      <ContainerItens>
       { list.length > 0 ? (
         list.map(item => (
          <Itens key={item.id} isFinished={item.finished}>
              <Check onClick={() => finishedTask(item.id)}/>
                {item.main}
              <Delete onClick={() => deleteTask(item.id)}/>
          </Itens>
       )))
       : <div style={{display:'flex',justifyContent:'center'}}><h4>Não há tarefas na lista</h4></div>
       }
      </ContainerItens>
      </ContainerMain>
    </Container>
  )
}

export default App
