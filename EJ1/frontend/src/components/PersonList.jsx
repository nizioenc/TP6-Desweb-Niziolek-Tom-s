export default function PersonList({ people, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person._id}>
            <td>{person.nombre}</td>
            <td>{person.apellido}</td>
            <td>{person.edad}</td>
            <td>
              <button onClick={() => onEdit(person)}>Editar</button>
              <button onClick={() => onDelete(person._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
