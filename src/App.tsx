import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  theme,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

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
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" placeholder="Vyplňte svůj pracovní e-mail." />
                <FormErrorMessage color="tomato" isInvalid>Jste si jistí, že jste e-mail zadali správně?</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Heslo</FormLabel>
                <Input type="password" placeholder="Zadejte odpovídající heslo." />
                <FormErrorMessage color="tomato">Jste si tímto heslem jistí?</FormErrorMessage>
              </FormControl>
            <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            >
              Přihlásit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  </ChakraProvider>
)
