import React, { useContext } from 'react'
import { TarefContext } from '../context/TarefContext' 
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {
  Container,
  Heading,
  Flex,
} from "native-base"

export function Header({props}) {

  const {toggleLoading, loading} = useContext(TarefContext)


  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen)
  }
  
  
  const goBack = (screen) => {
    toggleLoading(!loading)
    onChangeScreen(screen)
  }

  return(
    <Container width={"full"}>
      <Flex paddingTop={'10'} padding={6} direction='row' width={"395px"} backgroundColor={"#3a49f9"} alignItems={"center"}>
        <Container marginRight={9}>
          <Icon name="arrow-left-thin" size={22} color={"#e5eafc"} onPress={() => goBack("home")} />
        </Container>
        <Heading marginLeft={'16'} color={"#e5eafc"}>
          Criar tarefa
        </Heading>
      </Flex>
    </Container>
    )
}