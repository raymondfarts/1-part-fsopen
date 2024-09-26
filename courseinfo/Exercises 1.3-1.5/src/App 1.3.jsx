const App = () => {
  const course = 'Half Stack application development'  
  // const exercises = [ 
  // {part: 'Fundamentals of React',  exercise: 10  },
  // {part: 'Using props to pass data',  exercise: 7},
  // {part: 'State of a component',  exercise: 14}
  // ]
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content part1 ={part1} part2={part2} part3={part3}/>      
      <Total part1 ={part1} part2={part2} part3={part3}/>
    </div>
  )
}
const Header = (prop) =>{
  return(
    <h1>{prop.course}</h1>
  )
}
const Content = (prop) =>{
  return(
    <>
    <p>{prop.part1.name} {prop.part1.exercises}</p>
    <p>{prop.part2.name} {prop.part2.exercises}</p>
    <p>{prop.part3.name} {prop.part3.exercises}</p>
    </>
  )
}
const Total = (prop)=>{
  return (
    <p>Number of exercises {prop.part1.exercises + prop.part2.exercises + prop.part3.exercises}</p>
  )
}

export default App
