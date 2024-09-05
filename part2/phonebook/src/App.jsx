import { useState, useEffect } from "react";
import axios from "axios";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import Add from "./components/Add";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
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
    if (persons.some((person) => newName === person.name)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const person = { name: newName, number: newNumber };
    axios.post("http://localhost:3001/persons", person).then((res) => {
      setPersons(persons.concat(res.data));
      setNewName("");
      setNewNumber("");
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
        <Numbers persons={persons} />
      ) : (
        <Numbers persons={personsToShow} />
      )}
    </div>
  );
};

export default App;
