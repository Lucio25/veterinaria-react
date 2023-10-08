import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import {useState, useEffect} from 'react'

function App() {
 
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(()=>{

    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }

    obtenerLS();

  //cuando le pasamos un arreglo vacio significa q se ejecuta 1 vez
  }, [])

  useEffect (()=>{

   localStorage.setItem('pacientes', JSON.stringify( pacientes ));

  }, [pacientes])

  const eliminarPaciente = id => {
    //.filter crea un nuevo arreglo con la condicion q le coloquemos
    //en este caso con todos los pacientes con id distinto al que le tocamos el boton eliminar
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
