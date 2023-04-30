import { Box, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { chakra } from '@chakra-ui/react';
// import Textarea from 'react-input-autoresize';

// const AutoResizeInput = chakra(Textarea)

// function Example() {
//   return <AutoResizeInput bg='red.200' fontSize='12px' />
// };
// Example();

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })

export default theme