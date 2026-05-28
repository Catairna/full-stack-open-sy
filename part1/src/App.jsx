import { useState } from "react"

const Hello =  ({ name, age } ) => {

  const bornYear = () => new Date().getFullYear() - age
  

  return (
        <div>
          <p>Hello {name}, you are {age} years old</p>
          <p>So you were probably born {bornYear()}</p>
        </div>
)}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const History = props => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    console.log('left after', left)
    setTotal(updatedLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }
  
 
 
  const name = 'Pekka'
  const age = 10
  
  

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <div>
        <div>
          {left}
          <Button onClick={handleLeftClick} text='left' />
          <Button onClick={handleRightClick} text='right' />
          {right}
          <History allClicks={allClicks} />
          <p>total {total}</p>
        </div>
      </div>
      <Footer />
    </>
    
  )

}



export default App
