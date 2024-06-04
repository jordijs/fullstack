const Persons = ({ personsToShow, handleDeleteButton }) => {

 return personsToShow.map(person => {
        return <div key={person.name}>
          {person.name} {person.number} <button onClick={() => handleDeleteButton(person.id, person.name)} >delete</button>
        </div>
      })

}

export default Persons