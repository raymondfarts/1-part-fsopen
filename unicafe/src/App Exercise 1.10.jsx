import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick = {props.func}>{props.text}</button>
)
}
const StatisticsLine = (props) =>{
  return(
    <div>{props.text} {props.value}</div>
  )
}
const Statistics = (props) =>{
  if (props.total === 0){
    return(
      <>
      {/* <h1>statistics</h1> */}
      <div>No feedback given</div>
      </>
    )
  }
  return(
    <>
    {/* <h1>statistics</h1> */}
    {/* <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
    <div>total {props.total}</div>
    <div>average {props.avg}</div>
    <div>positives {props.pos} %</div> */}
    <StatisticsLine text ="good" value={props.good} />
    <StatisticsLine text ="neutral" value={props.neutral} />
    <StatisticsLine text ="bad" value={props.bad} />
    <StatisticsLine text ="total" value={props.total} />
    <StatisticsLine text ="average" value={props.avg} />
    <StatisticsLine text ="positives" value={props.pos} />
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