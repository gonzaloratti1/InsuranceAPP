import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useAutenticacion = () => {
    return useContext(CotizadorContext)
}

export default useAutenticacion