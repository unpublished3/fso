const Add = ({newName, newNumber, addNewPerson, onNameChange, onNumberChange}) => (
  <>
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
  </>
);

export default Add
