const Numbers = ({ persons }) => (
  <>
    <h2>Numbers</h2>
    {persons.map((person) => {
      return (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      );
    })}
  </>
);

export default Numbers;
