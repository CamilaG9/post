function Nota({ nota, eliminarNota }) {
  return (
    <div
      className="nota"
      style={{
        backgroundColor: nota.importante ? '#f8d7da' : '#fff3cd',
        borderLeft: nota.importante ? ' #c82333' : ' #ffc107',
      }}
    >
      <button onClick={() => eliminarNota(nota.id)}>x</button>
      <h3>{nota.titulo}</h3>
      <p>{nota.descripcion}</p>
    </div>
  );
}

export default Nota;
