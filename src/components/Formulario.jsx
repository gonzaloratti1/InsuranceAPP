import useCotizador from "../hooks/useCotizador";
import { MARCAS, YEARS, PLANES } from "../constants/index";
import { Fragment } from "react";
import Error from "./Error";



const Formulario = () => {

    const {handleChange, datos, error, setError, cotizarSeguro} = useCotizador()
    
    const handleClick = e => {
      e.preventDefault()

      if(Object.values(datos).includes('')){
        setError('Todos los campos son obligatorios')
        return
      }

      
      cotizarSeguro()
    }
    return (
    <>
      { error && <Error />}
      <form onSubmit={handleClick}>
        <div className="my-5">
          {/* margen Y de 5 -> CSS */}
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select name="marca" className="w-full p-3 bg-white border-gray-200" onChange={ e => handleChange(e)} value={datos.marca}>
            <option value="">Selecciona     Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          {/* margen Y de 5 -> CSS */}
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select name="year" className="w-full p-3 bg-white border-gray-200" onChange={ e => handleChange(e)} value={datos.year}>
            <option value="">Selecciona Año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          {/* margen Y de 5 -> CSS */}
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              
                <Fragment key={plan.id}>
                    <label>{plan.nombre}</label>
                    <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        onChange={ e => handleChange(e)}
                    />
                </Fragment>
              
            ))}
          </div>
        </div>
        <input
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold"
        value="Cotizar" />

      </form>
    </>
  );
};

export default Formulario;
