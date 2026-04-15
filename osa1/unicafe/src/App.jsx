import { useState } from 'react'

const Statistics = (props) => {
console.log(props)
  return (
    <div>
    <h1>Tilastot</h1>
    <p>hyvä {props.good}</p>
    <p>neutraali {props.neutral}</p>
    <p>huono {props.bad}</p>
    <p>yhteensä {props.all}</p>
    <p>keskiarvo {props.grade/props.all}</p>
    <p>positiivisia {props.good/props.all*100} %</p>


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
          <button onClick={() => {
              setGood(good +1)
              setAll(all + 1)
              setGrade(grade + 1)
              }

            }>
            Hyvä
          </button>
          <button onClick={() => {
            setNeutral(neutral +1)
            setAll(all + 1)
          }
        }>
          Neutraali
          </button>
          <button onClick={() => {
            setBad(bad + 1)
            setAll(all + 1)
            setGrade(grade - 1)
          }
            }>
              Huono
          </button>
         
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
