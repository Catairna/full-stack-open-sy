import { useState } from 'react'


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
          <h1>Tilastot</h1>
          <p>hyvä, {good}</p>
          <p>neutraali, {neutral}</p>
          <p>huono, {bad}</p>
          <p>yhteensä, {all}</p>
          <p>keskiarvo, {grade/all} </p>
          <p>positiivisia {good/all*100} %</p>
      

        </div>


  )
}

export default App
