import React, { useState, useEffect, useRef } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Flex,
  FlatList,
  ZStack,
  Center,
  Menu,
  Pressable
} from "native-base"

export function ListInfoTaref({item}) {

  function triggerMenu(triggerProps) {
    return (
        <Pressable accessibilityLabel="More options menu" {...triggerProps}>
          <Icon name={"dots-vertical"} size={20} color={"#6fea8b"}/>
        </Pressable>
    )
  }
  return (
    <Flex alignItems={"center"} direction='row' padding={5} borderRadius={'md'} height={'75px'} marginTop={4} width={"full"} backgroundColor={"#e5eafc"}>
      <Container>
        <Icon name={"clipboard-check-outline"} size={26}/>
      </Container>
      
      <Container marginLeft={4} marginTop={4} width={"140px"} height={"65px"}>
        <Heading fontSize={16}>{item.tarefa}</Heading>
        <Text opacity={40}>{`${item.nome} - ${item.date}`}</Text>
      </Container>

      <Container width={"full"}>
        <Flex direction='row' alignItems={"center"}>
            <Box
              borderColor={"#6fea8b"} 
              borderWidth={2} 
              borderRadius={'full'}
              marginLeft={"3px"} 
              justifyContent={'center'} 
              alignItems={"center"} 
              width={"120px"} 
              height={"40px"}>
                {item.status}
            </Box>
            
            <Box marginLeft={3} >
              <Menu w="190" trigger={triggerProps => triggerMenu(triggerProps)}>
                <Menu.Item>{<Icon name={"eye"} size={26}  color={"#3a49f9"}/>}Ver</Menu.Item>
                <Menu.Item>{<Icon name={"trash-can"} size={26} color={"#3a49f9"}/>}Excluir</Menu.Item>
                <Menu.Item>{<Icon name={"pencil"} size={26} color={"#3a49f9"}/>}Editar</Menu.Item>
              </Menu> 

            </Box>

        </Flex>


      </Container>
    </Flex>
  )
}