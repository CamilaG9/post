import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Nota from './Nota';

function App() {
  const [notas, setNotas] = useState([])
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion ] = useState('');
  const [importante, setImportante] = useState(false); //aca si el usuario ingresa que el post es importante se volvera True
  const agregarnota = () =>{
    if(!titulo.trim() || !descripcion.trim()){
      alert("Campos vacios");
      return
    }
    const nuevanota = {
      id: uuid(),
      titulo,
      descripcion,
      importante,
    };
    setNotas([...notas, nuevanota]);//se debe hacer una nueva array pq react no detecta los cambios si modificas el original
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };
  const eliminarnota = (id) => {
    setNotas(notas.filter((notas) => notas.id !== id))//se crea un nuevo array pero sin la nota que se elimmino

  }
  return(
    <div className='post'>
        <div className="from">
          <h1>Post it Simulator!</h1>
        <input
        type='text'
        placeholder='Titulo'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}//aca se activa cuando el usuario escribe o cambia algo en titulo
        />
        <input
        type='text'
        placeholder='Descripcion'
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        />
        <div className="importante">
          
        </div>
        <div>
          <input
        type='checkbox'
        checked={importante}//envia a importante si es True o False
        onChange={(e) => setImportante (e.target.checked)}
        />
        Importante
        </div>
        
        <button onClick={agregarnota}>Agregar Nota</button>

        </div>
        <div className="notas" >
          <div className='mostrarNotas' >
          {notas.map((nota) => (
            <Nota key = {nota.id} nota = {nota} eliminarNota={eliminarnota}/>// se realiza un componente personalizado con sus datos y la funcion de eliminar
          ))}
        </div>

      </div>
    </div>
  )
}
export default App;