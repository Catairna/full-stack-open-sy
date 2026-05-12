const Header = ({course}) => {
  return (<h2>{course.name}</h2>)
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
        <Part key={part.id} 
        part={part.name}
        exercises={part.exercises}
    />
      )} 
      
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <h4>Total exercises {total}</h4>
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
export default Course