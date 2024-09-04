import { useState } from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234556" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  let personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;
  console.log(personsToShow);

  const onNameChange = (e) => {
    setNewName(e.target.value);
  };

  const onNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const onFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => newName === person.name)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      Filter Results
      <input type="text" onChange={onFilterChange} />
      <h2>Add a New</h2>
      <form onSubmit={addNewPerson}>
        <div>
          Name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={onNumberChange} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      {!filter ? (
        <Numbers persons={persons} />
      ) : (
        <Numbers persons={personsToShow} />
      )}
    </div>
  );
};

export default App;
