import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)
const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
if (props.all === 0) {
  return (
    <h2>Palautetta ei ole annettu</h2>
  )
}
  return (
    <div>
      <h1>Tilastot</h1>
      
      <StatisticLine text="Hyvä" value={props.good} />
      <StatisticLine text="Neutraali"value={props.neutral}/>
      <StatisticLine text="Huono" value={props.bad}/>
      <StatisticLine text="Yhteensä" value={props.all}/>
      <StatisticLine text="Keskiarvo" value={props.grade/props.all}/>
      <StatisticLine text="Positiivisia" value={props.good/props.all*100 + " %"} />

    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [grade, setGrade] = useState(0)
 

  return (
  
        <div>
          <h1>Anna palautetta</h1>
          
          <Button onClick={() => {
            setGood(good +1)
            setAll(all + 1)
            setGrade(grade + 1)
            }} 
            text="Hyvä">
          </Button>

          <Button onClick={() => {
            setNeutral(neutral +1)
            setAll(all + 1)
            }} 
            text="Neutraali">
          </Button>

          <Button onClick={() => {
            setBad(bad + 1)
            setAll(all + 1)
            setGrade(grade - 1)
            }} 
            text="Huono">
          </Button>
          
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            grade={grade}
          />

        </div>

  )
}

export default App
