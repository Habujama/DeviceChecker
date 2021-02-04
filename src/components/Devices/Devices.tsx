import * as React from 'react'
import {
  VStack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react"

import { Logo } from "../../Logo"

const Devices = () => (
    <VStack spacing={5}>
        <HStack spacing={5}>
          <Logo h="10vmin" pointerEvents="none" />
          <VStack>
            <Heading as="h1" fontSize="xl">Chakra Device&nbsp;Checker</Heading>
          <Text as="p" fontSize="sm">
            Vyberte si
          </Text>
          </VStack>
        </HStack>
    </VStack>
)

export default Devices