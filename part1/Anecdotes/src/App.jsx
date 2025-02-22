import { useState } from 'react'

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const ComponentMostVoted = ({text,votes}) =>{
  if(!text && !votes){
    return (<p></p>)
  }
  return(<div> 
    <p>
    {text}
    </p>
    <br></br>
    <p>has {votes} votes</p>

  </div>)

}

const Title = ({text}) =>{
  return (<h1>{text}</h1>)
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  //copy[2] += 1
  const [selected, setSelected] = useState(0)

  const [mostVoted,setMostVoted]=useState(null)

  const mostVotedNum= () =>{
    

  }

  const randomNum = () => {
    const numRand=Math.floor(Math.random() * 8)
   
    setSelected(numRand)
  }
  const groNum = () => {
    
    const newVotes=[...votes]
    newVotes[selected] += 1
    setVotes([...newVotes])
    console.log(votes)


    let mostVotedCopy=0
    newVotes.forEach( (elem,index) => {
      if(mostVotedCopy<=elem){
        mostVotedCopy=elem
        setMostVoted(index)
      }
      
  });
  }
  return (
    <div>
      <Title text={"Anecdote of the day"}/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <br></br>
      <Button onClick={groNum} text="vote"/>
      <Button onClick={randomNum} text="next anecdote"/>
      <Title text={"Anecdote with most votes"}/>
      <ComponentMostVoted text={anecdotes[mostVoted]} votes={votes[mostVoted]}/>
    </div>
  )
}

export default App