import {React} from "react"
import Icon from "react-native-vector-icons/Ionicons"


import {
  Box,
  Heading,
  Text,
  Flex,
  VStack
} from "native-base"

export function ListTaref({item}) {
  return(

    <VStack backgroundColor={"blue.500"} alignItems={"flex-start"} padding={"3"} borderRadius={"3xl"} margin={"3"} height={"32"} width={"48"}>
      <Flex direction="row" alignItems={"center"} justifyContent={"space-around"}>
        <Icon color={"white"} marginLeft={6} name={"bulb-outline"} size={22} />
        <Text color={"white"} fontSize={15} marginLeft={3}>{item.title}</Text>
      </Flex>
      <Box>
        <Heading color={"white"} marginLeft={"1"} marginTop={"4"} fontSize={"5xl"}>
          {item.number}
        </Heading>
      </Box>
    </VStack>
    )
}