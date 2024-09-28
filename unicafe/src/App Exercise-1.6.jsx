import { useState } from 'react'

// const Button = ({func, text}) =>{
//   return(
//   <button onClick={func}>{text}</button>
//   )
// }
const Button = (props) =>{
  return(
  <button onClick={props.func}>{props.text}</button>
  )
}
// const gud = () => {
//   setGood(good += 1)
// }
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const goodFeedback = () => setGood(good += 1)
  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral +1)
  const badFeedback = () => setBad(bad + 1)



  return (
    <div>
      <h1>give feedback</h1>
      <Button func = {goodFeedback} text ="good"/>
      <Button func = {neutralFeedback} text ="neutral"/>
      <Button func = {badFeedback} text ="bad"/>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>

    </div>
  )
}

export default App