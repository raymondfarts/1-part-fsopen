import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick = {props.func}>{props.text}</button>
)
}
const StatisticsLine = (props) =>{
  return(
    // <table> TABLE NEEDS TO BE IN THE STATISTIC COMPONENT OR FORMATTING INCORRECT, VALUE WILL BE PUSHED AGAINST TEXT
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    // </table>
  )
}
const Statistics = (props) =>{
  if (props.total === 0){
    return(
      <>
      <div>No feedback given</div>
      </>
    )
  }
  return(
    <>
    <table> 
      <StatisticsLine text ="good" value={props.good} />
      <StatisticsLine text ="neutral" value={props.neutral} />
      <StatisticsLine text ="bad" value={props.bad} />
      <StatisticsLine text ="total" value={props.total} />
      <StatisticsLine text ="average" value={props.avg} />
      <StatisticsLine text ="positives" value={props.pos} />
    </table>
    </>
  )
} 
const App = () => {
  const [clicks , setClick] = useState(
    { 'good':0,
      'neutral':0,
      'bad':0,
      'total':0,
      'positive': 0
    })

  // const goodFeedback = () => setClick(clicks.good + 1)
  const goodFeedback = () => {
    const allClicks = {
      good: clicks.good + 1,
      neutral:clicks.neutral,
      bad:clicks.bad,
      total:clicks.total +1,
      positive:clicks.positive      
    }
    setClick(allClicks)
  }
  const neutralFeedback = () => {
    const allClicks = {
      good: clicks.good,
      neutral:clicks.neutral +1,
      bad:clicks.bad,
      total:clicks.total +1,
      positive:clicks.positive      
    }
    setClick(allClicks)
  }
  const badFeedback = () => {
    const allClicks = {
      good: clicks.good,
      neutral:clicks.neutral,
      bad:clicks.bad +1,
      total:clicks.total +1,
      positive:clicks.positive      
    }
    setClick(allClicks)
  }  
  
  return(
    <>
    <h1>give feedback</h1>
    <Button func={goodFeedback} text ="good"/>
    <Button func={neutralFeedback} text ="neutral"/>
    <Button func={badFeedback} text ="bad"/>
    <h1>statistics</h1>
    <Statistics good = {clicks.good} neutral = {clicks.neutral} bad = {clicks.bad} total = {clicks.total} avg ={(clicks.good-clicks.bad)/clicks.total} pos ={clicks.good/clicks.total}/>
     </>
  )
}

export default App