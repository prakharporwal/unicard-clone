import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <FirstPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
