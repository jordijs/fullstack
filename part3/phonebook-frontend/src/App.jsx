import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from "./components/Notification";
import personsService from './services/persons'

const App = () => {

  useEffect(() => {
    personsService.getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    for (const person of persons) {
      if (person.name === newName) {
        if (person.number === newNumber) {
          alert(`${newName} is already added to the phonebook with the same number (${newNumber})`)
          setNewName('')
          setNewNumber('')
          return
        } else {
          if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
            const editedObject = { ...person, number: newNumber }
            personsService
              .edit(person.id, editedObject)
              .then(returnedPerson => {
                setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
                setNewName('')
                setNewNumber('')
                displayNotification(true, `Edited ${returnedPerson.name}`)
              })
              .catch((error) => {
                if (error.response.status === 404) {
                  displayNotification(false, `Information of ${person.name} has already been removed from server`)
                  setPersons(persons.filter(personState =>
                    personState.id !== person.id
                  ))
                }
              })
          }
          return
        }
      }
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personsService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        displayNotification(true, `Added ${returnedPerson.name}`)
      })

  }

  const handleDeleteButton = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .deletePerson(id)
        .then((status) => {
          if (status === 204) {
            setPersons(persons.filter(person =>
              person.id !== id
            ))
            displayNotification(true, `Deleted ${name}`)
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            displayNotification(false, `${name} has already been deleted`)
            setPersons(persons.filter(person => {
              return person.id !== id
            }))
          } else {
            displayNotification(false, `An error ocurred deleting ${name}`)
          }
        })
    }
  }

  const displayNotification = (success, message) => {
    setNotification(
      { success, message }
    )
    setTimeout(() => {
      setNotification(null)
    }, 5000);
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().match(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDeleteButton={handleDeleteButton} />
    </div >
  )
}

export default App