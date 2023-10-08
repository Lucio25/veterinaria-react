import {useState, useEffect} from 'react';
import Error from './Error';

// eslint-disable-next-line react/prop-types
const Formulario = ({ pacientes , setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
  },[paciente])


  
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if([nombre, propietario, email, fechaAlta, sintomas].includes('')){
      console.log("Campos vacios")
      setError(true)
      return;
    }

    //Reseteo de la validacion para cuando se envie correctamente
    setError(false)

    //funcion para generar un id unico
    //si tenemos una bd, podemos pasarle el id de la bd
    const generarId = () =>{
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36)
      return random + fecha
    }

    //Objeto paciente
    const objetoPaciente ={
      nombre, 
      propietario,
      email, 
      fechaAlta, 
      sintomas,
      
    }

    // eslint-disable-next-line react/prop-types
    if(paciente.id){
      //editando registro
      // eslint-disable-next-line react/prop-types
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id 
        ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      //para limpiar el paciente a editar, limpiar state
      setPaciente({})
    }else{
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciar form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 my-10">
      
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
         {paciente.id ? 'Edite la informacion ' : 'Agrege Pacientes y '}
        <span className="text-indigo-600 font-bold">{paciente.id ? 'del paciente' : 'Administralos'}</span>
      </p>
      
      <form 
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
      onSubmit={handleSubmit}
      >
        {error && 
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-grey-700 uppercase font-bold">
            Email
          </label>
          <input
           id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
            />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
         
      </form>
    </div>
  )
}

export default Formulario