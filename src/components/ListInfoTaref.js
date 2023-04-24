import React, { useContext } from 'react'
import { getRealm } from '../services/realme'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TarefContext } from '../context/TarefContext' 

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

export function ListInfoTaref({item, props}) {


  const {getTarefId, toggleTaref, toggleLoading, loading} = useContext(TarefContext)

  const deleteTaref = async (taref) => {
    const realm = await getRealm()

    try {
      
      realm.write(() => {
        realm.delete(taref)
        toggleLoading(!loading)
      })

    } catch {
    }
  }

  const editTaref = (item, action) => {
    getTarefId(item)

    toggleTaref(action)

    toggleLoading(!toggleLoading)

    onChangeScreen("create")
  }

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen)
  }

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
        <Heading fontSize={16}>{item.title}</Heading>
        <Text opacity={40}>{`${item.responsible} - ${item.date}`}</Text>
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
                <Menu.Item onPress={() => editTaref(item, "edit")}>{<Icon name={"eye"} size={26}  color={"#3a49f9"}/>}Ver</Menu.Item>
                <Menu.Item onPress={() => deleteTaref(item)}>{<Icon name={"trash-can"} size={26} color={"#3a49f9"}/>}Excluir</Menu.Item>
                <Menu.Item onPress={() => editTaref(item, "edit")}>{<Icon name={"pencil"} size={26} color={"#3a49f9"}/>}Editar</Menu.Item>
              </Menu> 

            </Box>

        </Flex>


      </Container>
    </Flex>
  )
}