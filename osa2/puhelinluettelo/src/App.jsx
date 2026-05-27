import { useState } from 'react'
const Person = (props) => {
    return <p>{props.person.name}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState(
    'firstname lastname'
  )
  const addName = (event) => {
    event.preventDefault()
    if (personExists) {
          alert(`${newName} is already added to phonebook`)
        }
        else {

          const personObject = {
            name: newName
          }
          setPersons(persons.concat(personObject))
          setNewName('')
        }
  
  }
   const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
   }
  const personExists = persons.some(person =>  person.name === newName)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>  
          <Person key={person.name} person={person} />
        )}
        
        
    
    </div>
  )

}

export default App
