const App = () => {
  const course = 'Half Stack application development'  
  const parts = [ 
  {name: 'Fundamentals of React',  exercises: 10  },
  {name: 'Using props to pass data',  exercises: 7},
  {name: 'State of a component',  exercises: 14}
  ]

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
    <p>{prop.parts[0].name} {prop.parts[0].exercises}</p>
    <p>{prop.parts[1].name} {prop.parts[1].exercises}</p>
    <p>{prop.parts[2].name} {prop.parts[2].exercises}</p>
    </>
  )
}
const Total = (prop)=>{
  return (
    <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
  )
}

export default App
