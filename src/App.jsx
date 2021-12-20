import { Flex, VStack, Heading, Text, Image, Box } from "@chakra-ui/react"
import imagenD from "./source/images/image-header-desktop.jpg"
function App() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="flex-start"
      wrap="wrap"
    >
      <Flex my={10} bg="purple.900" w="80%" wrap="wrap">
        <VStack
          p="60px"
          w={{ base: "100%", lg: "60%" }}
          order={{ base: 2, lg: 1 }}
        >
          <Heading>
            Get &nbsp;
            <Text as="span" color="purple.400">
              insights
            </Text>
            &nbsp; that help your business grow.
          </Heading>
          <Text>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Text>
          <Flex w="100%" justifyContent="space-between" wrap="wrap">
            <VStack>
              <Text>10k+</Text>
              <Text>companies</Text>
            </VStack>
            <VStack>
              <Text>314</Text>
              <Text>templates</Text>
            </VStack>
            <VStack>
              <Text>12m+</Text>
              <Text>queries</Text>
            </VStack>
          </Flex>
        </VStack>
        <Flex
          w={{ base: "100%", lg: "40%" }}
          position="relative"
          order={{ base: 1, lg: 2 }}
        >
          <Image src={imagenD} w="100%" />
          <Box
            position="absolute"
            top="0"
            right="0"
            left="0"
            bottom="0"
            bg="rgba(50,38,89,0.3)"
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
