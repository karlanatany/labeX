import React from "react";
import { ChakraProvider} from '@chakra-ui/react'
import {Router} from "./route/Router";
import {Header} from "./components";


export function App() {
  return (
    <ChakraProvider>
      <Header/>
      
      <Router/>
      
    </ChakraProvider>
  )
}

export default App;
