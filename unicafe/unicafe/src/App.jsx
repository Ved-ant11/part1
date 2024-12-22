import { useState } from 'react'

const Button = ({onClick, name}) =>{
  return(
    <button onClick={onClick}>{name}</button>
  )
}

const StatisticLine = ({text,value})=>{
  return (
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) =>{
    if(good > 0 || neutral > 0 || bad > 0){
      return(
      <div> 
        <table>
          <tbody>
            <StatisticLine text="Good" value={good}/>
            <StatisticLine text="Neutral" value={neutral}/>
            <StatisticLine text="Bad" value={bad}/>
            <StatisticLine text="Total" value={good + neutral + bad}/>
            <StatisticLine text="Average" value={(good + neutral + bad)/3}/>
            <p>
            <StatisticLine text="Positive" value={((good)/(good+neutral+bad)*100)}/>
            </p>
          </tbody>
        </table> 
      </div> 
      )
    }
    else{
      return (
      <h2>No feedback given</h2>
      )
    }
  
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood =() =>{
    setGood(good + 1);
  }
  
  const addNeutral =() =>{
    setNeutral(neutral + 1);
  }
  
  const addBad =() =>{
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={addGood} name={"Good"}/>
      <Button onClick={addNeutral} name={"Neutral"}/>
      <Button onClick={addBad} name={"Bad"}/>


      <h1>Statistics</h1>

      <Statistics bad={bad} good={good} neutral={neutral}/>


    
    </div>
  )
}

export default App