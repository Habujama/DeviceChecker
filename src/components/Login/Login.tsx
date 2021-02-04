import React, {useState} from 'react'
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Redirect } from "react-router-dom";
import axios from 'axios'

import { Logo } from "../../Logo"

const Login = () => {

  const [state , setState] = useState({
    login : "",
    password : ""
  })

  const [loginSuccessfull, setloginSuccessfull] = useState(false)

  const handleChange = (e: any) => {
    const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'https://js-test-api.etnetera.cz/api/v1/login',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify({
        login: state.login,
        password: state.password
      }),
    }).then(response => {
      console.log(response);
      if (response.status === 200) {
        setloginSuccessfull(true)
      }
      else {
        setloginSuccessfull(false)
      }
    })
  }

  return (
    <VStack spacing={5}>
        <HStack spacing={5}>
          <Logo h="10vmin" pointerEvents="none" />
          <VStack>
            <Heading as="h1" fontSize="xl">Chakra Device&nbsp;Checker</Heading>
          <Text as="p" fontSize="sm">
            Přihlaste se, prosím
          </Text>
          </VStack>
        </HStack>
        <Box w={[300, 400, 560]} p={10}>
          <VStack spacing={5}>
              <FormControl id="login" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" placeholder="Vyplňte svůj pracovní e-mail." onChange={handleChange} value={state.login} />
                {!loginSuccessfull ?
                  <FormErrorMessage color="tomato" isInvalid>Určitě jste e-mail zadali správně?</FormErrorMessage> : null }
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Heslo</FormLabel>
                <Input type="password" placeholder="Zadejte odpovídající heslo." onChange={handleChange} value={state.password} />
                {!loginSuccessfull ? <FormErrorMessage color="tomato">Jste si tímto heslem jistí?</FormErrorMessage> : null }
              </FormControl>
            <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            >
                Přihlásit
            </Button>
            {loginSuccessfull ? <Redirect to="/devices" /> :null }
          </VStack>
        </Box>
    </VStack>
  )
}

export default Login