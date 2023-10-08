

// eslint-disable-next-line react/prop-types
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  // eslint-disable-next-line react/prop-types
  const {nombre, propietario, email, fechaAlta, sintomas, id} = paciente

  const handleEliminar = () => {
    
    const respuesta = confirm("Deseas eliminar este paciente?")
    
    if(respuesta){
      eliminarPaciente(id)
    }
    
  }
  

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 upercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 upercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 upercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 upercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 upercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button 
            type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
               text-white font-bold upercase rounded-lg"
            onClick={( ) => setPaciente(paciente)}
          >
            Editar
          </button>
          <button 
            type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-700
               text-white font-bold upercase rounded-lg"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
  </div>
  )
}

export default Paciente