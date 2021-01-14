import { ChakraProvider } from "@chakra-ui/react";

import MainPage from "./views/MainPage";

function App() {
  return (
    <ChakraProvider>
      <MainPage></MainPage>
    </ChakraProvider>
  );
}

export default App;
