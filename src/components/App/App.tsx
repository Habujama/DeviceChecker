import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    ChakraProvider,
    Box,
    theme,
  } from "@chakra-ui/react"

import { ColorModeSwitcher } from "../ColorModeSwitcher"
import Login from '../Login/Login';
import Devices from '../Devices/Devices';


export const App = () => (
<ChakraProvider theme={theme}>
    <Box 
      textAlign="center"
      fontSize="xl" borderWidth="1px"
      borderRadius="lg"
      p={50}
      m={5}
    >
      <ColorModeSwitcher 
        borderWidth="1px" 
        borderRadius="lg" 
        position="absolute" 
        top={[2, 5, 10]} 
        right={[8, 12, 18, 20]}
      />
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/devices">
                <Devices />
            </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
)
