import {React} from "react"
import Icon from "react-native-vector-icons/Ionicons"


import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  FlatList
} from "native-base"

export function ListTaref({item}) {
  return(

    <Flex backgroundColor={"#3a49f9"} alignItems={"flex-start"} padding={"3"} borderRadius={"3xl"} margin={"3"} height={"32"} width={"48"}>
      <Flex direction="row" alignItems={"center"} justifyContent={"space-around"}>
        <Icon color={"white"} marginLeft={6} name={"bulb-outline"} size={22} />
        <Text color={"white"} fontSize={15} marginLeft={3}>{item.title}</Text>
      </Flex>
      <Flex>
        <Heading color={"white"} marginLeft={"1"} marginTop={"4"} fontSize={"5xl"}>
          {item.number}
        </Heading>
      </Flex>
    </Flex>
    )
}