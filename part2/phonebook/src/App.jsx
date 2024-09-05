import { useState, useEffect } from "react";

import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Add from "./components/Add";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => setPersons(persons));
  }, []);

  let personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  const onNameChange = (e) => {
    setNewName(e.target.value);
  };

  const onNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    const existingPerson = persons.find((person) => newName === person.name);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one?`
        )
      )
        personService
          .updatePerson(existingPerson.id, {
            ...existingPerson,
            number: newNumber,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.name !== newName ? person : updatedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      return;
    }

    personService
      .addNew({ name: newName, number: newNumber })
      .then((person) => {
        setPersons(persons.concat(person));
        setNewName("");
        setNewNumber("");
      });
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`))
      personService.deletePerson(id).then((_) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={onFilterChange} />

      <Add
        newName={newName}
        newNumber={newNumber}
        addNewPerson={addNewPerson}
        onNameChange={onNameChange}
        onNumberChange={onNumberChange}
      />

      {!filter ? (
        <Numbers persons={persons} deletePerson={deletePerson} />
      ) : (
        <Numbers persons={personsToShow} deletePerson={deletePerson} />
      )}
    </div>
  );
};

export default App;
