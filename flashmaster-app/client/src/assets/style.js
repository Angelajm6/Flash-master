import { 
    Box,
    Image,
    Link,
    FormControl, 
    FormLabel, 
    Input, 
    Select, 
    Container, 
    Flex, 
    VStack, 
    Heading, 
    Text, 
    SimpleGrid, 
    GridItem,
    Button,
 } from '@chakra-ui/react';


// utility page for the moment
const IndexPage = () => (
    <Container maxWidth="container.xl" padding={0}>
        <Flex h="100vh" py={20}>
            <VStack 
             w="full"
             h="full" 
             p={10} 
             spacing={10} 
             alignItems="flex-start">
            </VStack>
            <VStack 
             w="full"
             h="full" 
             p={10} 
             spacing={10} 
             alignItems="flex-start"
             bg="gray.50">
                <VStack alignItems="flex-start" spacing={3}>
                    <Heading size="2x1">Your Donation</Heading>
                    <Text>
                        If the price is too hard on you eyes,
                        <Button variant="link" colorScheme="black">
                            
                        </Button>
                    </Text>
                </VStack>
            </VStack>
        </Flex>
    </Container>
);

//container for flashcard decks
const Card = () => {
<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
<Box p={4} display={{ md: 'flex' }}>
  <Box flexShrink={0}>
    <Image
      borderRadius='lg'
      width={{ md: 40 }}
      src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing='wide'
      color='teal.600'
    >
      Literature
    </Text>
    <Link
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
      The Great Gatsby
    </Link>
    <Text mt={2} color='gray.500'>
      A flashcard deck to test your knowledge on The Great Gatsby.
    </Text>
  </Box>
</Box>
</VStack>
};

//donation form
const Donation = () =>{
    return (
<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
            <Heading size="2x1">Your Details</Heading>
            <Text>Thank you for your donation!</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="First Name"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Last Name"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Billing Address</FormLabel>
                    <Input placeholder="Street Address"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input placeholder="City"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="aus">Australia</option>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input placeholder="$10.00"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <Button size="lg">Place Donation</Button>
            </GridItem>
        </SimpleGrid>
</VStack>
    )
};

export {IndexPage};
export {Donation};
export {Card};