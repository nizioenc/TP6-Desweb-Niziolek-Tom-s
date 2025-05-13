import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/personService";

export default function App() {
  const [people, setPeople] = useState([]);
  const [personToEdit, setPersonToEdit] = useState(null);

  const loadPeople = async () => {
    const res = await personService.getAll();
    setPeople(res);
  };

  useEffect(() => {
    loadPeople();
  }, []);

  const savePerson = async (person) => {
    if (person._id) {
      await personService.update(person._id, person);
    } else {
      await personService.create(person);
    }
    loadPeople();
    setPersonToEdit(null);
  };

  const deletePerson = async (id) => {
    await personService.remove(id);
    loadPeople();
  };

  return (
    <div>
      <h1>Gestión de Personas</h1>
      <PersonForm onSave={savePerson} personToEdit={personToEdit} />
      <PersonList people={people} onEdit={setPersonToEdit} onDelete={deletePerson} />
    </div>
  );
}
