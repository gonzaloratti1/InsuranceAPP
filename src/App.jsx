import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";
import useCotizador from "./hooks/useCotizador";

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  );
}

export default App;
