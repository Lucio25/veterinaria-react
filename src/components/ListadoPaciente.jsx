
import Paciente from "./Paciente"

// eslint-disable-next-line react/prop-types
const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll my-10">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">
              Pacientes y citas
              </span>
            </p>

    
          { pacientes.map( paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
            
          ))}
          </>
      ) : (
        <>
         <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {""}
              <span className="text-indigo-600 font-bold">
              y apareceran aqui
              </span>
            </p>
        </>
      )}
      

     
    
      

    </div>
  )
}
export default ListadoPaciente