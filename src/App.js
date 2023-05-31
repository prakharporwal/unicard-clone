import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import { ChakraProvider } from "@chakra-ui/react";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <FirstPage />
        <SecondPage/>
      </div>
    </ChakraProvider>
  );
}

export default App;
