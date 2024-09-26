// Exercise 1.5
const App = () => {
  const course = 'Half Stack application development'  
  const parts =
  {name1: 'Fundamentals of React',  exercises1: 10  ,
  name2: 'Using props to pass data',  exercises2: 7,
  name3: 'State of a component',  exercises3: 14}

  return (
    <div>
      <Header course = {course}/>
      <Content parts={parts}/>      
      <Total parts={parts}/>
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
    <p>{prop.parts.name1} {prop.parts.exercises1}</p>
    <p>{prop.parts.name2} {prop.parts.exercises2}</p>
    <p>{prop.parts.name3} {prop.parts.exercises3}</p>
    </>
  )
}
const Total = (prop)=>{
  return (
    <p>Number of exercises {prop.parts.exercises1 + prop.parts.exercises2 + prop.parts.exercises3}</p>
  )
}

export default App
