const Header = ({course}) => {
  
  return (<h1>{course.name}</h1>)
}


const Part = (props) => {
  return (
    <div>
      <p> 
       {props.part} {props.exercises}
       </p>
    </div>

)
}

const Content = ({parts}) => {
  return (
    <div>
      
      {parts.map(part =>
        <Part key={part.id} part={part.name + " " + part.exercises}/>
      )} 
      
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>

      <Header course={course} />
      <Content parts={course.parts} /> 
      <Total parts={course.parts} />
      
    </div>
  )
}
const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      Total exercises {total}
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      { 
        name: 'Using props to pass data',
        exercises:  7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
 
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
      
          


export default App
