// Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

const App = () => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = 'Half Stack application development'  
  const exercises = [ 
  {part: 'Fundamentals of React',  exercise: 10  },
  {part: 'Using props to pass data',  exercise: 7},
  {part: 'State of a component',  exercise: 14}
  ]

  return (
    <div>
      <Header name = {course}/>
      <Content exercises={exercises}/>      
      <Total exercises={exercises}/>
    </div>
  )
}
const Header = (prop) =>{
  return(
    <h1>{prop.name}</h1>
  )
}
const Content = (prop) =>{
  return(
    <>
    <p>{prop.exercises[0].part} {prop.exercises[0].exercise}</p>
    <p>{prop.exercises[1].part} {prop.exercises[1].exercise}</p>
    <p>{prop.exercises[2].part} {prop.exercises[2].exercise}</p>
    </>
  )
}
const Total = (prop)=>{
  return (
    <p>Number of exercises {prop.exercises[0].exercise + prop.exercises[1].exercise + prop.exercises[2].exercise}</p>
  )
}

export default App
