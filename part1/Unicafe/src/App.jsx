import { useState } from 'react'



const Title = () => <h1>Give feedback</h1>

const SubTitle = () => <h2>Statistics</h2>

const Button = ({onSmash,text}) => (<button onClick={onSmash}>{text}</button>)

const DisplayGood = ({good,total}) =>{ 
  if (total === 0) {
    return <div><p></p></div>
  }
  return <div><p>good: {good}</p></div>
  }


const DisplayNeutral = ({neutral,total}) => { 
  if (total === 0) {
    return <div><p></p></div>
  }
  return <div><p>neutral: {neutral}</p></div>
  }


const DisplayBad = ({bad,total}) =>{ 
if (total === 0) {
  return <div><p></p></div>
}
return <div><p>Bad: {bad}</p></div>
}


const DisplayTotal = ({good,neutral,bad}) => {

  if (good+neutral+bad === 0) {
    return <div><p>No feedback given</p></div>
  }
  return <div><p>All: {good+neutral+bad}</p></div>
}

const DisplayAverage = ({good,neutral,bad,total}) => {
  if (total === 0) {
    return <div><p></p></div>
  }

  return <div><p>Average: {(good/(good+neutral+bad))*100}%</p></div>

  }


const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)
  
  return (
    <div>
      <Title />
      <Button
        onSmash={increaseByOneGood}
        text='Good'
      />
      <Button
        onSmash={increaseByOneNeutral}
        text='Neutral'
      />     
      <Button
        onSmash={increaseByOneBad}
        text='Bad'
      />           
      <SubTitle />
      <table>
        <tbody>
          <tr>
            <td><DisplayGood good={good} total={good+bad+neutral} /></td>
          </tr>
          <tr>
            <td><DisplayNeutral neutral={neutral} total={good+bad+neutral} /></td>
          </tr>
          <tr>
            <td><DisplayBad bad={bad} total={good+bad+neutral} /></td>
          </tr>
          <tr>
          <td><DisplayTotal good={good} neutral={neutral} bad={bad}/></td>
          </tr>
          <tr>
          <td><DisplayAverage good={good} neutral={neutral} bad={bad} total={good+bad+neutral}/> </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  )

}
export default App