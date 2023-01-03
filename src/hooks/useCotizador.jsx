import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

// Simpliifica el useContext
const useCotizador = () => {
    return useContext(CotizadorContext)
}

export default useCotizador