

const App = () => {
 
  const Arreglo=[{
    name:'Luis Rubi',
    age:20

  },
  {
    name:'Raul',
    age:40
  }]
  return (
    
    <div>
      <h1>Greetings</h1>
      <p>{Arreglo[0].name} {Arreglo[0].age}</p>
      <p>{Arreglo[1].name} {Arreglo[1].age}</p>

    </div>
  )
}

export default App