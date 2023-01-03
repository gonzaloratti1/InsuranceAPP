import React from "react";
import { useState, createContext } from "react";
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia);

    //Hay que restar el 3% de cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    console.log(resultado);

    //Americano 15%
    //Europeo 30%
    //Asiatico 5%
    resultado *= calcularMarca(datos.marca);
    console.log(resultado);

    // Basico 20%

    // Completo 50%
    resultado *= calcularPlan(datos.plan);
    resultado = resultado.toFixed(2);
    console.log(resultado);

    //Formatear dinero
    resultado = formatearDinero(resultado);

    
    setCargando(true);

    setTimeout(() => {
    
        setResultado(resultado);
    
        setCargando(false)
    }, 3000);
    
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChange,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
