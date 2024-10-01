const Numbers = ({ persons, deletePerson }) => (
  <>
    <h2>Numbers</h2>
    {persons.map((person) => {
      return (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button
            onClick={() => {
              deletePerson(person.id, person.name);
            }}
          >
            Delete
          </button>
        </p>
      );
    })}
  </>
);

export default Numbers;
